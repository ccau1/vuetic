<template>
  <ThemeProvider :theme="theme">
    <div class="container">
      <AppBar
        :title="title"
        :leftIcon="leftIcon"
        @onLeftIconClick="setLeftIcon(leftIcon)"
      >
        <template v-slot:left></template>
        Sub-Title
        <template v-slot:right>Login</template>
      </AppBar>
    </div>
  </ThemeProvider>
</template>

<script>
import AppBar from "../AppBar.vue";
import ThemeProvider from "../../ThemeProvider.vue";
import theme from "../../baseTheme.ts";

export default {
  name: "AppBarBasic",
  components: {
    AppBar,
    ThemeProvider
  },
  data() {
    return {
      theme,
      title: "TITLE",
      leftIcon: "bars"
    };
  },
  methods: {
    setLeftIcon(leftIcon) {
      this.leftIcon = leftIcon === "bars" ? "chevron-left" : "bars";
    },
    onLeftIconClick(ev) {
      ev.stopPropagation();
      this.setLeftIcon();
    }
  }
};
</script>

<style scoped></style>

<include-source />
