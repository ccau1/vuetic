<template>
  <header :style="headerStyle">
    <div class="header-inner" :style="headerInnerStyle">
      <div class="logo">
        <router-link class="logo-link" to="/">
          <img
            class="logo-img"
            src="https://www.buffalowildwings.com/globalassets/bww-logo_rgb_icon.png"
          />
          <Spacer width="5px" />
          <Typography category="h1" background="primary">App Title</Typography>
        </router-link>
      </div>
      <div class="left-side">
        <Spacer width="10px" />
        <Menu />
      </div>
      <div class="right-side">
        <ThemeSwitcher />
        <Spacer width="10px" />
        <LocaleSwitcher />
      </div>
    </div>
  </header>
</template>

<script>
import LocaleSwitcher from "@/containers/Locale/LocaleSwitcher.vue";
import ThemeSwitcher from "@/containers/Theme/ThemeSwitcher.vue";
import Menu from "./Menu.vue";

export default {
  components: { LocaleSwitcher, ThemeSwitcher, Menu },
  inject: ["theme"],
  data() {
    const headerStyle = {
      backgroundColor: this.theme?.colors?.primary || "#fea",
      color: this.theme?.colors?.text?.bgPrimary || "#000",
      paddingLeft:
        (this.theme?.dimensions?.contentHorizontalPadding || 0) + "px",
      paddingRight:
        (this.theme?.dimensions?.contentHorizontalPadding || 0) + "px"
    };

    const headerInnerStyle = {};
    if (this.theme?.dimensions?.contentMaxWidth) {
      headerInnerStyle.maxWidth = this.theme.dimensions.contentMaxWidth + "px";
    }

    return { headerStyle, headerInnerStyle };
  }
};
</script>

<style lang="scss" scoped>
header {
  padding: 10px 0px;

  & > .header-inner {
    display: flex;
    flex-direction: row;
    height: 50px;
    align-items: center;
    margin: 0 auto;
  }

  & .logo-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
  }
  & .logo-img {
    max-height: 50px;
  }

  & .left-side {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  & .right-side {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: flex-end;
  }
}
</style>
