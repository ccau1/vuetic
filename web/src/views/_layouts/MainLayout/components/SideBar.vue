<template>
  <aside :style="style">
    <div class="aside-inner">
      abc
    </div>
  </aside>
</template>

<script>
export default {
  inject: ["theme"],
  computed: {
    style() {
      const style = {};
      style.backgroundColor = this.theme?.layout?.sideBarBg;
      style.color = this.theme?.layout?.sideBarColor;
      style.borderColor = this.theme?.layout?.sideBarSeparatorColor;
      return style;
    }
  }
};
</script>

<style lang="scss" scoped>
aside {
  width: 250px;
  background-color: #fff;
  overflow-x: hidden;
  position: relative;
  margin-right: 15px;
  border-right: 1px solid;

  & > .aside-inner {
    width: 250px;
    padding: 70px 10px;
  }

  @media screen and (max-width: 950px) {
    position: absolute;
    left: 0;
    height: 100%;
    z-index: 100;
    box-shadow: 1px 1px 40px -4px rgba(0, 0, 0, 0.5);
  }
}
</style>
