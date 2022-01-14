export type FormValues = {
  [key: string]: FormValues | number | string | boolean;
};

export type FormErrors = {
  [field: string]: string | FormErrors;
};

export interface FormOptions {
  initialValues?: FormValues;
  validate?: (values: FormValues) => FormErrors;
  asyncValidate?: (values: FormValues) => Promise<FormErrors>;
  onSubmit?: (values: FormValues) => Promise<FormErrors>;
}

export interface FormState {
  $pristine: boolean;
  $dirty: boolean;
  $touched: boolean;
  $untouched: boolean;
  $valid: boolean;
  $invalid: boolean;
  $pending: boolean;
  $submitted: boolean;
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
    // if (!parentValues[finalFieldName]) {
    //   // FIXME: vue specific call for adding new values on the fly.
    //   // Can library be agnostic?
    //   Vue.set(parentValues, finalFieldName, "");
    // }
    let value = ev;
    if (typeof ev === "object") {
      // if ev is an object, assume it is an event,
      // so assign value based on its type
      switch (ev.type) {
        case "input":
          value = ev?.target?.value;
          break;
        case "change":
          value = ev?.target?.checked;
          break;
      }
    }
    // update value based on found value and fileName
    this._setValue(fieldName, value);

    // update field tree to dirty and not pristine
    this._formStateTransformPath(fieldName, o => {
      o.$dirty = true;
      o.$pristine = false;
      o.$touched = true;
      o.$untouched = false;
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

  public showErrors = (paths: string | string[]) => {
    if (!this.isTouched(paths) || !this.isDirty(paths)) {
      return "";
    }
    // return error for that path
    return this._getPathValue(paths, this.errors);
  };

  protected _getPathValue = (paths: string | string[], obj: any) => {
    if (!paths) return obj;
    const parent = this._getPathParent(paths, obj);
    return parent?.[
      (typeof paths === "string" ? paths.split(".") : paths).pop() || ""
    ];
  };

  protected _getPathParent = (
    paths: string | string[],
    obj: any
  ): FormValues | null => {
    const pathParts = typeof paths === "string" ? paths.split(".") : paths;
    if (!pathParts?.length) return null;
    const parentValues = pathParts.reduce((obj, path, pathIndex) => {
      if (pathIndex === pathParts.length - 1) {
        // last pos
      } else {
        if (!obj[path]) {
          obj[path] = {};
        }
        obj = obj[path] as FormValues;
      }
      return obj;
    }, obj);
    return parentValues;
  };

  public isTouched = (paths?: string | string[]) => {
    if (paths === "__general") return this.formState.$submitted;
    return this._formStatePath(this.formState, paths)?.$touched;
  };

  public isDirty = (paths?: string | string[]) => {
    if (paths === "__general") return this.formState.$submitted;
    return this._formStatePath(this.formState, paths)?.$dirty;
  };

  public isValid = (paths?: string | string[]) => {
    return this._formStatePath(this.formState, paths)?.$valid;
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
      formState.$submitted = true;
      return formState;
    });

    // call and validate all fields. If false, form is invalid, so just
    // end it here
    if (await this.validateAll()) {
      const errors = await this.options.onSubmit?.(this.values);
      if (errors && Object.keys(errors).length) {
        // result has errors, add them
        this._setErrors(errors);
      }
    }
    this._formStateTransformAll(formState => {
      formState.$pending = false;
      return formState;
    });
  };

  public resetForm = (options: FormOptions = this.options) => {
    this._handleOptions(options);
    this.formState = this._generateFormState();
  };

  public syncAllValidationState = () => {
    // get all error paths as string array
    const errorPaths = this._getFieldPathsInObject(this.errors);

    // go through all fields
    this._formStateTransformAll((formState, parentPath) => {
      if (!parentPath) {
        // this is root, if has errorPaths item, set invalid
        formState.$invalid = !!errorPaths.length;
        formState.$valid = !errorPaths.length;
      } else if (errorPaths.includes(parentPath)) {
        // if parent path is in error paths
        // set this path to invalid
        formState.$invalid = true;
        formState.$valid = false;
      } else {
        // if parent path not in error paths array, it is okay, so
        // set it to valid
        formState.$invalid = false;
        formState.$valid = true;
      }
      formState.$pending = false;
      return formState;
    });
  };

  public validateAll = async (): Promise<boolean> => {
    this._formStateTransformAll(formState => {
      formState.$pending = true;
      return formState;
    });
    // let isValid = true;
    // clear all prior error messages
    this._resetErrors();

    // validate fields and set errors if any
    const validateResult = this.options.validate?.(this.values);
    if (validateResult && Object.keys(validateResult).length) {
      // isValid = false;
      this._setErrors(validateResult);
    }

    // async validate fields and set errors if any
    const asyncValidateResult = await this.options.asyncValidate?.(this.values);
    if (asyncValidateResult && Object.keys(asyncValidateResult).length) {
      // isValid = false;
      this._setErrors(asyncValidateResult);
    }

    // update all formState's $valid and $invalid fields based on this.errors
    this.syncAllValidationState();

    return Object.keys(this.errors).length === 0;
  };

  public validateField = async (fieldName: string) => {
    this._formStateTransformPath(
      fieldName,
      formState => (formState.$pending = true)
    );
    let isValid = true;
    // clear all prior error messages
    this._resetErrors();

    const validateResult = this.options.validate?.(this.values);
    if (validateResult && Object.keys(validateResult).length) {
      isValid = false;
      this._setErrors(validateResult);
    }

    const asyncValidateResult = await this.options.asyncValidate?.(this.values);
    if (asyncValidateResult && Object.keys(asyncValidateResult).length) {
      isValid = false;
      this._setErrors(asyncValidateResult);
    }

    // update all formState's $valid and $invalid fields based on this.errors
    this.syncAllValidationState();

    this._formStateTransformPath(
      fieldName,
      formState => (formState.$pending = false)
    );
    return isValid;
  };

  protected _getFieldPathsInObject = (
    obj: { [key: string]: any },
    parentKey?: string
  ) => {
    // go through each key inside the object
    return Object.keys(obj).reduce<string[]>((errorPaths, errorKey) => {
      // add this current key path into our array
      errorPaths.push(parentKey ? [parentKey, errorKey].join(".") : errorKey);
      // if this key's value is an object
      if (typeof obj[errorKey] === "object") {
        // call itself to fetch its sub paths
        const subErrorsPaths = this._getFieldPathsInObject(
          obj[errorKey],
          parentKey ? [parentKey, errorKey].join(".") : errorKey
        );
        // concat current paths with its sub-error paths
        errorPaths = [...errorPaths, ...subErrorsPaths];
      }
      // return newly built path string array
      return errorPaths;
    }, []);
  };

  protected _resetErrors = () => {
    // clear all prior error messages
    for (const prop of Object.getOwnPropertyNames(this.errors)) {
      delete this.errors[prop];
    }
  };

  protected _setErrors = (errors: FormErrors) => {
    Object.keys(errors).forEach(v => {
      this.errors[v] = errors[v];
    });
  };

  protected _setValue(paths: string | string[], value: any) {
    const pathParts = typeof paths === "string" ? paths.split(".") : paths;
    if (!pathParts.length) return;
    const parentValues = pathParts.reduce((obj, path, pathIndex) => {
      if (pathIndex === pathParts.length - 1) {
        // last pos
      } else {
        if (!obj[path]) {
          obj[path] = {};
        }
        obj = obj[path] as FormValues;
      }
      return obj;
    }, this.values);

    const finalFieldName = pathParts.pop() || "";
    parentValues[finalFieldName] = value;
  }

  protected _formStateTransformAll(
    transform: (formState: FormState, parentKey?: string) => void,
    formState: FormState = this.formState,
    parentKey?: string
  ) {
    transform(formState, parentKey);
    Object.keys(formState.$values).forEach(valueField => {
      this._formStateTransformAll(
        transform,
        formState.$values[valueField],
        parentKey ? `${parentKey}.${valueField}` : valueField
      );
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

  protected _formStatePath(
    formState: FormState,
    fieldPath?: string | string[]
  ) {
    if (!fieldPath) return formState;
    // return field path object in form state
    return (typeof fieldPath === "string"
      ? fieldPath.split(".")
      : fieldPath
    ).reduce((o, path) => o.$values[path], formState);
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
      $submitted: false,
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
