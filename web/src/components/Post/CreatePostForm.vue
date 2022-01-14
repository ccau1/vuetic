<template>
  <div class="new-post">
    <FieldLocaleSwitcher
      position="bottom"
      :locales="locales"
      #default="{selectedLocale}"
    >
      <TextInput
        label="Title"
        placeholder="placing holders"
        float
        full
        :value="values.title[selectedLocale]"
        @input="e => onChange(`title.${selectedLocale}`)(e)"
        @focus="onFocus(`title.${selectedLocale}`)"
        @blur="onBlur(`title.${selectedLocale}`)"
        :error="showErrors(`title.${selectedLocale}`)"
      />
      <HtmlEditor
        :value="values.content[selectedLocale]"
        @change="val => onChange(`content.${selectedLocale}`)(val)"
      />
      <Spacer height="10px" />
      <ErrorMessage>{{ showErrors(`content.${selectedLocale}`) }}</ErrorMessage>
    </FieldLocaleSwitcher>
    <Spacer height="10px" />
    <ErrorMessage>{{ showErrors(`__general`) }}</ErrorMessage>
    <Button @click="handleSubmit">Submit</Button>
    <!-- <pre>{{errors}}</pre>
    <pre>{{values}}</pre>
    <pre>{{formState}}</pre>-->
  </div>
</template>

<script>
import Form from "../../lib/Form";
import { localeSet } from "../../../../components/web/FieldLocaleSwitcher/index";
export default {
  components: {},
  data: function() {
    const locales = localeSet;
    return {
      locales,
      ...new Form({
        initialValues: {
          title: {
            en: "",
            "zh-hk": "",
            "zh-cn": ""
          },
          content: {
            en: "",
            "zh-hk": "",
            "zh-cn": ""
          }
        },
        validate(values) {
          const errors = {};
          locales.forEach(locale => {
            if (!values.title[locale.value]) {
              if (!errors.title) {
                errors.title = {};
              }
              errors.title[locale.value] = "this is required";
              errors.__general = "ensure all field locales are entered";
            }
            if (!values.content[locale.value]) {
              if (!errors.content) {
                errors.content = {};
              }
              errors.content[locale.value] = "this is required";
              errors.__general = "ensure all field locales are entered";
            }
          });

          return errors;
        },
        onSubmit: values => {
          this.$emit("submit", values);
        }
      })
    };
  }
};
</script>
