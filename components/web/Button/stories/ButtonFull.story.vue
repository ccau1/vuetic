<template>
  <ThemeProvider :theme="theme">
    <div class="container">
      <Button :full="true">Full Button</Button>
      <Button :full="false">Not Full Button</Button>
    </div>
  </ThemeProvider>
</template>

<script>
import Button from "../Button.vue";
import ThemeProvider from "../../ThemeProvider.vue";
import theme from "../../baseTheme.ts";

export default {
  name: "ButtonFull",
  components: { Button, ThemeProvider },
  data() {
    return {
      theme
    };
  }
};
</script>

<style scoped>
div.container > button {
  padding: 10px;
  margin-bottom: 10px;
}
</style>

<include-source />
