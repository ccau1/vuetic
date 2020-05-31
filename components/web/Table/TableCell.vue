<template>
  <td :style="style">
    <slot />
  </td>
</template>

<script>
export default {
  props: {
    sortDirection: {
      type: Boolean
    },
    align: {
      type: String,
      validator: val => ["left", "right", "center"].includes(val),
      default: "left"
    }
  },
  inject: ["theme", "tableSize"],
  computed: {
    style() {
      const tableRowTheme = this.theme?.components?.table?.tableCell || {};

      let tablePaddingHorizontal = tableRowTheme?.paddingHorizontal || 10;
      if (this.tableSize === "small") tablePaddingHorizontal *= 0.5;
      if (this.tableSize === "large") tablePaddingHorizontal *= 1.5;

      let tablePaddingVertical = tableRowTheme?.paddingVertical || 10;
      if (this.tableSize === "small") tablePaddingVertical *= 0.5;
      if (this.tableSize === "large") tablePaddingVertical *= 1.5;

      const style = {};
      style.borderBottomWidth = style.borderTopWidth = "1px";
      style.borderLeftWidth = style.borderRightWidth = "0px";
      style.borderStyle = "solid";
      style.borderTopColor = style.borderBottomColor =
        tableRowTheme?.borderHorizontalColor || "transparent";
      style.marginBottom = "-1px";
      style.paddingLeft = style.paddingRight = tablePaddingHorizontal + "px";
      style.paddingTop = style.paddingBottom = tablePaddingVertical + "px";
      style.textAlign = this.align;

      return style;
    }
  }
};
</script>

<style scoped>
table tbody td {
  border-bottom-width: 0px !important;
}
table tbody tr:last-child td {
  border-bottom-width: 1px !important;
}
table thead tr td {
  border-top-width: 0px !important;
  border-bottom-width: 0px !important;
}
</style>
