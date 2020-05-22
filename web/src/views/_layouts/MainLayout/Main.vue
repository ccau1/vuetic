<template>
  <main class="container" :style="containerStyle">
    <slot />
  </main>
</template>

<script>
export default {
  inject: ["theme"],
  data() {
    const containerStyle = {};
    containerStyle.maxWidth = this.theme.dimensions.contentMaxWidth
      ? this.theme.dimensions.contentMaxWidth + "px"
      : "auto";

    containerStyle.backgroundColor =
      this.theme?.colors?.backgroundContent || "#fff";
    containerStyle.color = this.theme?.colors?.text?.bgContent || "#000";

    return { containerStyle };
  }
};
</script>

<style scoped>
.container {
  flex: 1;
  margin: 0 auto;
  overflow-y: auto;
}
</style>
