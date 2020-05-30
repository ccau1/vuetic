<template>
  <div class="card-content" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  inject: ["theme"],
  computed: {
    style() {
      const style = {};
      style.paddingLeft = style.paddingRight =
        (this.theme?.components?.card?.paddingHorizontal || 10) + "px";
      style.paddingTop = style.paddingBottom =
        (this.theme?.components?.card?.paddingVertical || 10) + "px";

      return style;
    }
  }
};
</script>

<style scoped></style>
