<template>
  <span>
    <slot />
  </span>
</template>

<script>
export default {
  name: "ErrorMessage",
  props: ["icon", "accessory"]
};
</script>

<style scoped>
span {
  color: red;
  display: block;
}
</style>
