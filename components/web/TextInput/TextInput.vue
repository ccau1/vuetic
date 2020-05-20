<template>
  <div
    class="container"
    :class="{
      horizontal,
      full: this.full !== undefined,
      rounded: this.rounded !== undefined,
      'label-floated': isFloated
    }"
    v-click-outside="onBlur"
    @click="onFocus"
  >
    <label>{{ label }}</label>
    <div class="input-error-container">
      <input
        ref="input"
        :placeholder="_placeholder"
        :value="value"
        @input="text => $emit('input', text)"
        @keyup.enter="e => $emit('enter', e)"
      />
      <ErrorMessage class="error-msg">{{ error }}</ErrorMessage>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import ErrorMessage from "../ErrorMessage";
export default {
  name: "TextInput",
  props: [
    "label",
    "placeholder",
    "value",
    "float",
    "full",
    "rounded",
    "error",
    "horizontal",
    "enter",
    "blur",
    "focus"
  ],
  directives: { ClickOutside },
  components: {
    ErrorMessage
  },
  computed: {
    // handles placeholder text
    _placeholder: function() {
      // if label exists and float, do not show placeholder
      return this.label && this.float !== undefined ? "" : this.placeholder;
    }
  },
  data: function() {
    return {
      isFloated: false
    };
  },
  methods: {
    onFocus: function() {
      // set text input focus
      this.$refs.input.focus();
      // set floating to true
      this.isFloated = true;
      // notify parent focus
      this.$emit("focus");
    },
    onBlur: function() {
      // notify parent blur
      this.$emit("blur");
      // only set float to false if there's no value
      if (!this.value) {
        this.isFloated = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
div.container {
  padding: 30px 0;
  position: relative;
  background-color: #fff;
}

div.input-error-container {
  position: relative;
  flex-direction: column;
  text-align: left;
}
.full .input-error-container {
  width: 100%;
}

label {
  position: absolute;
  top: 40px;
  left: 10px;
  padding: 2px 5px;
  z-index: 1;
  opacity: 0.4;
  user-select: none;

  transition: all 300ms;

  &.horizontal {
  }
}
.label-floated label {
  top: 18px;
  transform: scale(0.8) translateX(-4%);
  background-color: #fff;
  opacity: 1;
}

input {
  box-sizing: border-box;
  font-size: 13pt;
  border: 1px solid #eee;
  padding: 10px 10px;
  outline: none;
}
.rounded input {
  border-radius: 8px;
}
.full input {
  width: 100%;
}

.error-msg {
  position: absolute;
  bottom: -23px;
}
</style>
