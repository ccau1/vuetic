<template>
  <ThemeProvider :theme="theme">
    <HtmlEditor v-on:change="setEditorContent" />
  </ThemeProvider>
</template>

<script>
import ThemeProvider from "../../ThemeProvider.vue";
import theme from "../../baseTheme.ts";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import HtmlEditor from "../HtmlEditor.vue";

export default {
  name: "HtmlEditorBasic",
  components: {
    HtmlEditor,
    ThemeProvider
  },
  data() {
    return {
      theme,
      editorContent: ""
    };
  },
  methods: {
    setEditorContent: function(val) {
      this.editorContent = val;
    }
  }
};
</script>

<include-source />
