<template>
  <ThemeProvider :theme="theme">
    <div class="container">
      <Button>Default Button</Button>
      <Button status="primary">Primary Button</Button>
      <Button status="secondary">Secondary Button</Button>
      <Button status="info">Info Button</Button>
      <Button status="success">Success Button</Button>
      <Button status="warning">Warning Button</Button>
      <Button status="danger">Danger Button</Button>
    </div>
  </ThemeProvider>
</template>

<script>
import Button from "../Button.vue";
import ThemeProvider from "../../ThemeProvider.vue";
import theme from "../../baseTheme.ts";

export default {
  name: "ButtonStatus",
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

<include-source></include-source>
