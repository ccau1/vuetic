<template>
  <main>
    <div class="main-inner" :style="mainInnerStyle">
      <slot />
    </div>
  </main>
</template>

<script>
export default {
  inject: ["theme"],
  computed: {
    mainInnerStyle() {
      const mainInnerStyle = {};
      mainInnerStyle.width = this.theme?.dimensions?.contentMaxWidth
        ? this.theme.dimensions.contentMaxWidth + "px"
        : "auto";

      mainInnerStyle.paddingRight = mainInnerStyle.paddingLeft =
        (this.theme?.dimensions?.contentHorizontalPadding || 0) + "px";
      mainInnerStyle.paddingTop = mainInnerStyle.paddingBottom =
        (this.theme?.dimensions?.contentVerticalPadding || 0) + "px";

      mainInnerStyle.backgroundColor =
        this.theme?.colors?.backgroundContent || "#fff";
      mainInnerStyle.color = this.theme?.colors?.text?.bgContent || "#000";

      return mainInnerStyle;
    }
  }
};
</script>

<style scoped>
main {
  overflow-y: auto;
}
.main-inner {
  flex: 1;
  margin: 0 auto;
  max-width: 100%;
  box-sizing: border-box;
}
</style>
