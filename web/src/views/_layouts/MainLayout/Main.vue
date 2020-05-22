<template>
  <main class="container" :style="style">
    <slot />
  </main>
</template>

<script>
export default {
  inject: ["theme"],
  computed: {
    style() {
      const containerStyle = {};
      containerStyle.width = this.theme.dimensions.contentMaxWidth
        ? this.theme.dimensions.contentMaxWidth + "px"
        : "auto";

      containerStyle.paddingRight = containerStyle.paddingLeft =
        this.theme.dimensions.contentHorizontalPadding + "px";
      containerStyle.backgroundColor =
        this.theme?.colors?.backgroundContent || "#fff";
      containerStyle.color = this.theme?.colors?.text?.bgContent || "#000";

      return containerStyle;
    }
  }
};
</script>

<style scoped>
.container {
  flex: 1;
  margin: 0 auto;
  overflow-y: auto;
  max-width: 100%;
  box-sizing: border-box;
}
</style>
