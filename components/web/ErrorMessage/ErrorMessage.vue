<template>
  <span>
    <slot />
  </span>
</template>

<script>
export default {
  name: "ErrorMessage"
};
</script>

<style scoped>
span {
  color: red;
  display: block;
}
</style>
