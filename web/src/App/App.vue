<template>
  <ThemeProvider>
    <LocaleProvider>
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/todos">Todos</router-link>
        </div>
        <LocaleSwitcher />
        <router-view />
      </div>
    </LocaleProvider>
  </ThemeProvider>
</template>

<script>
import ThemeProvider from "./ThemeProvider.vue";
import LocaleProvider from "./LocaleProvider.vue";
import LocaleSwitcher from "../containers/Locale/LocaleSwitcher.vue";

export default {
  components: { ThemeProvider, LocaleProvider, LocaleSwitcher }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
