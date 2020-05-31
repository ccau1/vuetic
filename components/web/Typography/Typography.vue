<template>
  <component :is="tag" :style="style"><slot /></component>
</template>

<script>
export default {
  name: "Typography",
  props: {
    category: {
      default: "body1",
      validator: val =>
        [
          "h1", // display h1
          "h2", // display h2
          "h3", // display h3
          "h4", // display h4
          "subtitle1", // display like page title or list item title
          "subtitle2", // display like subtitle1 but bold
          "body1", // default display like p in html
          "body2", // default display body1 but bold
          "button1", // display in button and input
          "button2", // like button1 but bold
          "caption1", // display small text
          "caption2", // display small text but bold
          "label1", // smaller than caption display in input label
          "label2" // display like label1 but bold
        ].includes(val)
    },
    color: {
      default: "inherit",
      validator: val =>
        [
          "primary",
          "secondary",
          "success",
          "info",
          "danger",
          "hint",
          "inherit"
        ].includes(val)
    },
    background: {
      validator: val =>
        [
          "content",
          "light",
          "dark",
          "primary",
          "secondary",
          "info",
          "danger",
          "warning",
          "success"
        ].includes(val)
    }
  },
  inject: ["theme"],
  computed: {
    style() {
      const style = {};
      if (this.background) {
        const capitalizeText =
          this.background.charAt(0).toUpperCase() + this.background.slice(1);
        style.color =
          this.theme?.colors?.text?.[`bg${capitalizeText}`] || "inherit";
      } else if (this.color) {
        style.color =
          this.theme?.components?.typography?.color?.[this.color] || "inherit";
      }

      return style;
    },
    tag() {
      let tag = "p";
      switch (this.category) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
          tag = this.category;
          break;
        case "subtitle1":
          tag = "h5";
          break;
        case "subtitle2":
          tag = "h6";
          break;
        case "body1":
        case "body2":
          tag = "p";
          break;
        case "caption1":
        case "caption2":
          tag = "small";
          break;
        case "label1":
        case "label2":
          tag = "p";
          break;
      }
      return tag;
    }
  }
};
</script>

<style lang="scss" scoped></style>
