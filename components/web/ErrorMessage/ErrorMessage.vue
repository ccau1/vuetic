<template>
  <span :style="style">
    <slot />
  </span>
</template>

<script>
export default {
  name: "ErrorMessage",
  inject: ["theme"],
  computed: {
    style() {
      const style = {};
      style.color = this.theme?.colors?.danger || "red";
      style.display = "block";
      return style;
    }
  }
};
</script>
