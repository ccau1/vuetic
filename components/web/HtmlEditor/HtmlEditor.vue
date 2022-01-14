<template>
  <div>
    <div class=".post-ckeditor">
      <ckeditor
        :editor="editor"
        v-model="innerValue"
        @input="emitEditorContent"
        class="ck-content"
      />
    </div>
    <ErrorMessage class="error-msg">{{ error }}</ErrorMessage>
    <!-- {{innerValue}} -->
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ckEditor from "@ckeditor/ckeditor5-vue";
import ErrorMessage from "../ErrorMessage/ErrorMessage.vue";

export default {
  name: "HtmlEditor",
  components: {
    ckeditor: ckEditor.component,
    ErrorMessage
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    change: Function,
    error: String
  },
  data() {
    return {
      editor: ClassicEditor,
      innerValue: ""
    };
  },
  methods: {
    emitEditorContent: function() {
      this.$emit("change", this.innerValue);
    }
  },
  watch: {
    value() {
      this.innerValue = this.value;
    }
  },
  inject: ["theme"]
};
</script>

<style lang="scss">
.post-ckeditor {
  color: black;
}
.ck-content {
  min-height: 300px;
}
</style>