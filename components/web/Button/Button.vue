<template>
  <button
    @click="$emit('click', $event)"
    :disabled="disabled"
    :style="style"
    :class="[
      'status-' + (this.status || 'primary'),
      { rounded: this.rounded !== undefined && this.rounded !== false },
      { disabled: this.disabled !== undefined && this.disabled !== false }
    ]"
  >
    <slot />
  </button>
</template>

<script>
import { capitalizeText } from "../utils";

export default {
  name: "Button",
  props: {
    click: Function,
    status: {
      default: "secondary",
      validate: val =>
        [
          "primary",
          "secondary",
          "info",
          "success",
          "warning",
          "danger"
        ].includes(val)
    },
    disabled: Boolean,
    rounded: {
      default: null,
      type: Boolean
    },
    full: Boolean
  },
  inject: ["theme"],
  computed: {
    style() {
      const style = {};
      style.backgroundColor = this.theme?.colors?.[this.status];
      style.color = this.theme?.colors?.text?.[
        `bg${capitalizeText(this.status)}`
      ];

      if (
        this.rounded ||
        (this.rounded === null &&
          this.theme?.components?.button?.defaultRounded)
      ) {
        style.borderRadius = "8px";
      }

      if (this.full) {
        style.width = "100%";
      }

      return style;
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  position: relative;
  border: 0px solid transparent;
  padding: 13px 20px;

  &:focus {
    outline: none;
  }
  &:active::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.2);
  }

  &.disabled::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }
  // &.status-primary {
  //   background-color: #42b882;
  //   color: #fff;
  // }
  // &.status-secondary {
  //   background-color: #35495d;
  //   color: #fff;
  // }
  // &.status-info {
  //   background-color: #17a2b8;
  //   color: #fff;
  // }
  // &.status-success {
  //   background-color: #28a745;
  //   color: #fff;
  // }
  // &.status-warning {
  //   background-color: #ffc107;
  // }
  // &.status-danger {
  //   background-color: #dc3545;
  //   color: #fff;
  // }
}
</style>
