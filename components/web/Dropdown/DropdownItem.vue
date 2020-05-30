<template>
  <div class="dd-item" :class="{ active, disabled }" v-on="listeners">
    {{ text }}
    <slot />
  </div>
</template>

<script>
export default {
  name: "DropdownItem",
  props: {
    active: Boolean,
    disabled: Boolean,
    text: String
  },
  computed: {
    listeners() {
      return { ...this.$listeners };
    }
  }
};
</script>

<style lang="scss" scoped>
.dd-item {
  position: relative;
  padding: 10px;
  min-width: 80px;

  &.disabled {
    opacity: 0.2;
  }

  &.active:not(.disabled)::after,
  &:hover:not(.disabled)::after,
  &:active:not(.disabled)::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // FIXME: how to define dynamic background color?
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
}
</style>
