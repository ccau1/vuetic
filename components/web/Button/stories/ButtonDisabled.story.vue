<template>
  <ThemeProvider :theme="theme">
    <div class="container">
      <Button :disabled="true">Disabled Button</Button>
      <Button :disabled="false">Not Disabled Button</Button>
    </div>
  </ThemeProvider>
</template>

<script>
import Button from "../Button.vue";
import ThemeProvider from "../../ThemeProvider.vue";
import theme from "../../baseTheme.ts";

export default {
  name: "ButtonDisabled",
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
  margin-bottom: 10px;
}
</style>

<include-source />
