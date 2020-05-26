<template>
  <main :style="style">
    <slot />
  </main>
</template>

<script>
export default {
  inject: ["theme"],
  computed: {
    style() {
      const style = {};

      style.paddingRight = style.paddingLeft =
        (this.theme?.layout?.contentHorizontalPadding || 0) + "px";
      style.paddingTop = style.paddingBottom =
        (this.theme?.layout?.contentVerticalPadding || 0) + "px";

      style.backgroundColor = this.theme?.colors?.backgroundContent || "#fff";
      style.color = this.theme?.colors?.text?.bgContent || "#000";

      return style;
    }
  }
};
</script>

<style scoped>
main {
  overflow-y: auto;
  flex: 1;
}
.main-inner {
  flex: 1;
  margin: 0 auto;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
}
</style>
