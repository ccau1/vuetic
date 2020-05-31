<template>
  <table :style="style">
    <slot />
  </table>
</template>

<script>
export default {
  inject: ["theme"],
  props: {
    size: {
      type: String,
      validator: val => ["small", "medium", "large"].includes(val)
    }
  },
  provide() {
    return {
      tableSize: this.size
    };
  },
  computed: {
    style() {
      const style = {};
      return style;
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-spacing: 0px;
  border-collapse: separate;
  overflow: hidden;
  /* TODO: below is for scrollable, but need to calculate column widths */
  /* https://blog.logrocket.com/how-to-make-provide-inject-reactive/ */
  /* display: block;
  overflow-x: auto;
  white-space: nowrap; */
}
</style>
