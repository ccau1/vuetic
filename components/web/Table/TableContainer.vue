<template>
  <div class="container" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  inject: ["theme"],
  computed: {
    style() {
      const style = {};
      style.border = `1px solid ${this.theme?.components?.table?.table
        ?.borderColor || "transparent"}`;
      style.borderRadius =
        (this.theme?.components?.table?.table?.borderRadius || 0) + "px";
      style.overflow = "hidden";

      return style;
    }
  }
};
</script>

<style scoped>
.container *:last-child {
  margin-bottom: -1px;
}
</style>
