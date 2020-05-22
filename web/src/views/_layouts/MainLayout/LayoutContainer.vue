<template>
  <div class="layout-container" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  inject: ["theme"],
  computed: {
    style() {
      const style = {};
      style.backgroundColor = this.theme.colors.background;
      return style;
    }
  }
};
</script>

<style scoped>
.layout-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
