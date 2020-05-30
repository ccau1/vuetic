<template>
  <div class="card-footer" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  props: {},
  inject: ["theme"],
  computed: {
    style() {
      const style = {};
      style.borderBottomLeftRadius = style.borderBottomRightRadius =
        (this.theme?.components?.card?.cornerRadius || 0) + "px";
      // style.marginLeft = style.marginRight =
      //   -this.theme?.components?.card?.paddingHorizontal + "px";
      // style.marginTop = this.theme?.components?.card?.paddingVertical + "px";
      // style.marginBottom =
      //   -this.theme?.components?.card?.paddingVertical + "px";
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
.card-footer {
  box-sizing: border-box;
  padding: 25px;

  & > button {
    margin-right: 5px;
  }
  & > button:first-child {
    margin-left: -15px;
  }
}
</style>
