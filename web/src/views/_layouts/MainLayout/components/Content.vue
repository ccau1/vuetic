<template>
  <content :style="style">
    <slot />
  </content>
</template>

<script>
export default {
  inject: ["theme"],
  computed: {
    style() {
      const style = {};
      style.width = this.theme?.layout?.contentMaxWidth
        ? this.theme.layout.contentMaxWidth + "px"
        : "auto";
      return style;
    }
  }
};
</script>

<style>
content {
  display: flex;
  flex-direction: row;
  flex: 1;
  margin: 0 auto;
  max-width: 100%;
  overflow-y: auto;
  position: relative;
}
</style>
