<template>
  <div class="table-pagination" :style="style">
    -- Pagination Pending --
  </div>
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      default: "right",
      validator: val => ["left", "right", "center"].includes(val)
    }
  },
  inject: ["theme"],
  computed: {
    style() {
      const tableRowTheme = this.theme?.components?.table?.tableCell || {};
      const style = {};
      style.paddingLeft = style.paddingRight =
        (tableRowTheme?.paddingHorizontal || 10) + "px";
      style.paddingTop = style.paddingBottom =
        (tableRowTheme?.paddingVertical || 10) + "px";

      switch (this.align) {
        case "left":
          style.justifyContent = "flex-start";
          break;
        case "center":
          style.justifyContent = "center";
          break;
        case "right":
        default:
          style.justifyContent = "flex-end";
          break;
      }
      return style;
    }
  }
};
</script>

<style scoped>
.table-pagination {
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
}
</style>
