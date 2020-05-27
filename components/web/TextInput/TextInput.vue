<template>
  <div
    class="container"
    :class="{
      horizontal,
      full: this.full !== undefined,
      rounded: this.isRounded,
      'label-floated': isFloated
    }"
    v-click-outside="onBlur"
    @click="onFocus"
  >
    <label>{{ label }}</label>
    <div class="input-error-container">
      <input
        ref="input"
        :type="inputType"
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
  props: {
    label: String,
    placeholder: String,
    value: String,
    float: Boolean,
    full: Boolean,
    rounded: {
      default: null,
      type: Boolean
    },
    error: String,
    horizontal: Boolean,
    input: Function,
    enter: Function,
    blur: Function,
    focus: Function,
    secureTextEntry: Boolean
  },
  inject: ["theme"],
  directives: { ClickOutside },
  components: {
    ErrorMessage
  },
  computed: {
    // handles placeholder text
    _placeholder() {
      // if label exists and float, do not show placeholder
      return this.label && this.float !== undefined ? "" : this.placeholder;
    },
    isRounded() {
      return (
        this.rounded ||
        (this.rounded === null &&
          this.theme?.components?.textInput?.defaultRounded)
      );
    },
    inputType() {
      return this.secureTextEntry ? "password" : "text";
    }
  },
  data: function() {
    return {
      isFocused: false,
      isFloated: Boolean(this.value)
    };
  },
  methods: {
    onFocus: function() {
      // set text input focus
      this.$refs.input.focus();
      // set floating to true
      this.isFloated = true;
      this.isFocused = true;
      // notify parent focus
      this.$emit("focus");
    },
    onBlur: function() {
      // notify parent blur
      if (this.isFocused) {
        this.$emit("blur");
      }
      // only set float to false if there's no value
      if (!this.value) {
        this.isFloated = false;
      }
      this.isFocused = false;
    }
  }
};
</script>

<style lang="scss" scoped>
div.container {
  padding: 30px 0;
  position: relative;
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
  padding: 2px 10px;
  z-index: 1;
  opacity: 0.4;
  user-select: none;
  background-color: transparent;
  color: #000;

  transition: all 300ms;

  &.horizontal {
  }
}
.label-floated label {
  top: 17px;
  transform: scale(0.8) translateX(-4%);
  opacity: 1;
  border-radius: 5px 5px 0 0;
  background-color: #fff;
}

input {
  box-sizing: border-box;
  font-size: 13pt;
  border: 1px solid #eee;
  padding: 10px 10px;
  outline: none;
  background-color: rgba(255, 255, 255, 1);
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
