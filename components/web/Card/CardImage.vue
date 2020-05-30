<template>
  <div class="card-image" :style="style"></div>
</template>

<script>
export default {
  props: {
    src: { type: String, required: true }
  },
  inject: ["theme"],
  computed: {
    style() {
      const style = {};
      style.backgroundImage = `url('${this.src}')`;
      style.backgroundPosition = `center center`;
      style.backgroundRepeat = `no-repeat`;
      style.backgroundSize = `cover`;

      return style;
    }
  }
};
</script>

<style lang="scss" scoped>
.card-image {
  width: 100%;
}
</style>
