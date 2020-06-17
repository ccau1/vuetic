<template>
  <ThemeProvider :theme="theme">
    <FieldLocaleSwitcher
      :position="position"
      :locales="locales"
      :error="error"
      v-on:change="selectLocale"
    >
      <HtmlEditor v-on:change="setEditorContent" />
    </FieldLocaleSwitcher>
  </ThemeProvider>
</template>

<script>
import FieldLocaleSwitcher from "../FieldLocaleSwitcher";
import ThemeProvider from "../../ThemeProvider.vue";
import theme from "../../baseTheme.ts";
import HtmlEditor from "../../HtmlEditor";
import { localeSet } from "../index";

export default {
  name: "AppBarBasic",
  components: {
    FieldLocaleSwitcher,
    ThemeProvider,
    HtmlEditor
  },
  data() {
    return {
      theme,
      locales: localeSet,
      position: "bottom",
      editorContent: "",
      selected: "",
      error: ""
    };
  },
  methods: {
    selectLocale: function (localeVal) {
      this.selected = localeVal;
    },
    setEditorContent: function (val) {
      this.editorContent = val;
    }
  }
};
</script>
<style></style>
