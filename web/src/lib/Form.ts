import Vue from "vue";

export type FormValues = {
  [key: string]: FormValues | number | string | boolean;
};

export type FormErrors = {
  [field: string]: string;
};

export interface FormOptions {
  initialValues?: FormValues;
  validate?: (values: FormValues) => FormErrors;
  asyncValidate?: (values: FormValues) => Promise<FormErrors>;
  onSubmit?: (values: FormValues) => void;
}

export interface FormState {
  $pristine: boolean;
  $dirty: boolean;
  $touched: boolean;
  $untouched: boolean;
  $valid: boolean;
  $invalid: boolean;
  $pending: boolean;
  $values: {
    [field: string]: FormState;
  };
}

export default class Form {
  public options: FormOptions = {};
  public values: FormValues = {};
  public formState: FormState = this._generateFormState();
  public errors: FormErrors = {};
  constructor(options: FormOptions) {
    // on initializing, reset form because
    // they are the same thing
    this.resetForm(options);
  }
  // eslint-disable-next-line
  public onChange = (fieldName: string) => (ev: any) => {
    if (!this.values[fieldName]) {
      // FIXME: vue specific call. Can library be agnostic?
      Vue.set(this.values, fieldName, "");
    }
    if (typeof ev === "object") {
      // if ev is an object, assume it is an event,
      // so assign value based on its type
      switch (ev.type) {
        case "input":
          this.values[fieldName] = ev?.target?.value;
          break;
        case "change":
          this.values[fieldName] = ev?.target?.checked;
          break;
      }
    } else {
      // if ev not an object, assume we're directly inserting
      // value here
      this.values[fieldName] = ev;
    }
    // update field tree to dirty and not pristine
    this._formStateTransformPath(fieldName, o => {
      o.$dirty = true;
      o.$pristine = false;
    });
    // validate field
    this.validateField(fieldName);
  };

  public onFocus = (fieldName: string) => {
    // on focus, update all field tree to touched
    this._formStateTransformPath(fieldName, formState => {
      formState.$touched = true;
      formState.$untouched = false;
    });
  };

  public onBlur = (fieldName: string) => {
    // on blur, validate field
    this.validateField(fieldName);
  };

  public handleSubmit = async () => {
    // if currently pending, do not submit.
    // this could be because of asyncValidate
    // or already submitting
    if (this.formState.$pending) return;
    this._formStateTransformAll(formState => {
      formState.$pending = true;
      formState.$touched = true;
      formState.$untouched = false;
      formState.$pristine = false;
      formState.$dirty = true;
      return formState;
    });
    const result = await this.options.onSubmit?.(this.values);
    // this.formState.$pending = false;
    return result;
  };

  public resetForm = (options: FormOptions = this.options) => {
    this._handleOptions(options);
    this.formState = this._generateFormState();
  };

  public validateField = async (fieldName: string) => {
    this._formStateTransformPath(
      fieldName,
      formState => (formState.$pending = true)
    );
    this.errors = {
      ...this.options.validate?.(this.values),
      ...(await this.options.asyncValidate?.(this.values))
    };
    this._formStateTransformPath(
      fieldName,
      formState => (formState.$pending = false)
    );
  };

  protected _formStateTransformAll(
    transform: (formState: FormState) => void,
    formState: FormState = this.formState
  ) {
    transform(formState);
    Object.keys(formState.$values).forEach(valueField => {
      this._formStateTransformAll(transform, formState.$values[valueField]);
    });
  }

  protected _formStateTransformPath(
    fieldPath: string,
    transform: (formState: FormState) => void,
    formState: FormState = this.formState
  ) {
    transform(formState);
    return fieldPath.split(".").reduce((o, path) => {
      let inner = o.$values[path];
      if (!inner) {
        // if inner formState does not exists,
        // add it now as it may not have been initially
        // declared in initialValues
        inner = o.$values[path] = this._generateFormState({});
      }
      transform(inner);
      return inner;
    }, formState);
  }

  protected _formStatePath(formState: FormState, fieldPath: string) {
    // return field path object in form state
    return fieldPath.split(".").reduce((o, path) => o.$values[path], formState);
  }

  protected _handleOptions(options: FormOptions) {
    this.options = options;
    this.values = options.initialValues || {};
  }

  protected _generateFormState(values: FormValues = this.values) {
    const formState: FormState = {
      $pristine: true,
      $dirty: false,
      $touched: false,
      $untouched: true,
      $valid: true,
      $invalid: false,
      $pending: false,
      $values: {}
    };
    Object.keys(values).forEach(fieldName => {
      formState.$values[fieldName] = this._generateFormState(
        typeof values[fieldName] === "object"
          ? (values[fieldName] as FormValues)
          : {}
      );
    });
    return formState;
  }
}
