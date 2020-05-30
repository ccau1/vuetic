<template>
  <div class="card-header" :style="style">
    <div class="card-header-text">
      <Typography category="h3">{{ title }}</Typography>
      <Typography category="subtitle" color="hint">{{ subtitle }}</Typography>
    </div>
    <slot />
  </div>
</template>

<script>
import Typography from "../Typography/Typography.vue";
export default {
  props: {
    title: String,
    subtitle: String
  },
  inject: ["theme"],
  components: { Typography },
  computed: {
    style() {
      const style = {};
      style.borderTopLeftRadius = style.borderTopRightRadius =
        (this.theme?.components?.card?.cornerRadius || 0) + "px";
      // style.marginLeft = style.marginRight =
      //   -this.theme?.components?.card?.paddingHorizontal + "px";
      // style.marginTop = -this.theme?.components?.card?.paddingVertical + "px";
      // style.marginBottom = this.theme?.components?.card?.paddingVertical + "px";
      style.paddingLeft = style.paddingRight =
        (this.theme?.components?.card?.paddingHorizontal || 10) + "px";
      style.paddingTop = style.paddingBottom =
        (this.theme?.components?.card?.paddingVertical || 10) + "px";

      return style;
    }
  }
};
</script>

<style lang="scss" scoped>
.card-header {
  box-sizing: border-box;
  padding: 25px;
  // border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
}
.card-header-text {
  flex: 1;

  & > * {
    margin: 0;
  }
}
</style>
