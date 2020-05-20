<template>
  <div :style="style" />
</template>

<script>
export default {
  name: "Spacer",
  props: ["width", "height"],
  computed: {
    style() {
      let styles = "";
      if (this.width) styles += `width: ${this.width}`;
      if (this.height) styles += `height: ${this.height}`;
      return styles;
    }
  }
};
</script>

<style scoped>
button {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px 20px;
}
</style>
