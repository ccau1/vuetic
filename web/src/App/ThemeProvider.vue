<template>
  <ThemeProvider :theme="theme">
    <slot />
  </ThemeProvider>
</template>

<script>
import ThemeProvider from "@components/web/ThemeProvider.vue";
import themes from "@/themes";
import { mapGetters } from "vuex";

export default {
  components: { ThemeProvider },
  computed: {
    ...mapGetters(["currentTheme", "isThemeDark"]),
    theme() {
      const { isThemeDark, currentTheme } = this;
      const theme = isThemeDark
        ? themes[`${currentTheme}.dark`] || themes[currentTheme]
        : themes[currentTheme];
      return theme;
    }
  }
};
</script>
