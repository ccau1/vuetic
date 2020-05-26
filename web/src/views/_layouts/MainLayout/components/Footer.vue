<template>
  <footer :style="footerStyle">
    <div class="container-inner" :style="containerInnerStyle">
      © 2020 Abc, Inc.
    </div>
  </footer>
</template>

<script>
export default {
  inject: ["theme"],
  data() {
    const footerStyle = {
      backgroundColor: this.theme?.layout?.footerBg || "#fea",
      color: this.theme?.colors?.text?.bgPrimary || "#000"
    };

    const containerInnerStyle = {};
    if (this.theme?.layout?.contentMaxWidth) {
      containerInnerStyle.maxWidth = this.theme?.layout?.contentMaxWidth + "px";
    }
    return { containerInnerStyle, footerStyle };
  }
};
</script>

<style scoped>
footer {
  text-align: center;
  padding: 20px;
}
.container-inner {
  margin: 0 auto;
}
</style>
