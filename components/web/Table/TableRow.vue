<template>
  <tr :style="style">
    <slot />
  </tr>
</template>

<script>
export default {
  inject: ["theme"],
  computed: {
    style() {
      const style = {};
      return style;
    }
  }
};
</script>

<style scoped></style>
