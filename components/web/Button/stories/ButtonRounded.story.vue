<template>
  <ThemeProvider :theme="theme">
    <div class="container">
      <Button :rounded="true">Rounded Button</Button>
      <Button :rounded="false">Not Rounded Button</Button>
    </div>
  </ThemeProvider>
</template>

<script>
import Button from "../Button.vue";
import ThemeProvider from "../../ThemeProvider.vue";
import theme from "../../baseTheme.ts";

export default {
  name: "ButtonRounded",
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
