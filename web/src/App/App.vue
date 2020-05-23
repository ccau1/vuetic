<template>
  <ThemeProvider>
    <LocaleProvider>
      <router-view />
    </LocaleProvider>
  </ThemeProvider>
</template>

<script>
import ThemeProvider from "./ThemeProvider.vue";
import LocaleProvider from "./LocaleProvider.vue";

export default {
  components: { ThemeProvider, LocaleProvider }
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
