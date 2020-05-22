<template>
  <footer :style="footerStyle">
    <div class="container-inner" :style="containerInnerStyle">abc</div>
  </footer>
</template>

<script>
export default {
  inject: ["theme"],
  data() {
    const footerStyle = {
      backgroundColor: this.theme.colors.primary
    };

    const containerInnerStyle = {};
    if (this.theme.dimensions.contentMaxWidth) {
      containerInnerStyle.maxWidth =
        this.theme.dimensions.contentMaxWidth + "px";
    }
    return { containerInnerStyle, footerStyle };
  }
};
</script>

<style scoped>
footer {
  padding: 20px;
}
.container-inner {
  margin: 0 auto;
}
</style>
