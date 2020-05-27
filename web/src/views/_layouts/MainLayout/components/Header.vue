<template>
  <header :style="headerStyle">
    <div class="header-inner" :style="headerInnerStyle">
      <a class="menu-icon" @click="onMenuIconClick">
        <FontAwesomeIcon v-if="!isSideBarOpen" icon="bars" fixed-width />
        <FontAwesomeIcon v-if="isSideBarOpen" icon="chevron-left" fixed-width />
      </a>
      <div class="logo">
        <router-link class="logo-link" to="/">
          <img
            class="logo-img"
            src="https://www.buffalowildwings.com/globalassets/bww-logo_rgb_icon.png"
          />
          <Spacer width="5px" />
          <!-- <div class="logo-title"> -->
          <Typography
            v-if="title"
            class="logo-title"
            v-breakpoint:show="['md', 'lg', 'xl']"
            category="h1"
            background="primary"
            >{{ title }}</Typography
          >
          <!-- </div> -->
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);
library.add(faChevronLeft);

export default {
  components: { FontAwesomeIcon, LocaleSwitcher, ThemeSwitcher, Menu },
  inject: ["theme"],
  props: {
    isSideBarOpen: Boolean,
    toggleSideBar: Function,
    title: String
  },
  data() {
    const headerStyle = {
      backgroundColor: this.theme?.layout?.headerBg || "#fea",
      color: this.theme?.colors?.text?.bgPrimary || "#000",
      paddingLeft: (this.theme?.layout?.contentHorizontalPadding || 0) + "px",
      paddingRight: (this.theme?.layout?.contentHorizontalPadding || 0) + "px"
    };

    const headerInnerStyle = {};
    if (this.theme?.layout?.contentMaxWidth) {
      headerInnerStyle.maxWidth = this.theme.layout.contentMaxWidth + "px";
    }

    return { headerStyle, headerInnerStyle };
  },
  methods: {
    onMenuIconClick(ev) {
      ev.stopPropagation();
      this.$emit("toggleSideBar", !this.isSideBarOpen);
    }
  }
};
</script>

<style lang="scss">
header {
  padding: 10px 0px;
  user-select: none;

  & .menu-icon {
    width: 24px;
    padding: 10px 10px 10px 0;
  }

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
  & .logo-title {
  }
}
</style>
