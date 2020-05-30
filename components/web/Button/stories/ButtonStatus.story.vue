<template>
  <ThemeProvider :theme="theme">
    <div class="container">
      <Button @click="onClick">Default Button</Button>
      <Button status="primary" @click="onClick">Primary Button</Button>
      <Button status="secondary" @click="onClick">Secondary Button</Button>
      <Button status="info" @click="onClick">Info Button</Button>
      <Button status="success" @click="onClick">Success Button</Button>
      <Button status="warning" @click="onClick">Warning Button</Button>
      <Button status="danger" @click="onClick">Danger Button</Button>
      <Button status="link" @click="onClick">Link Button</Button>
    </div>
  </ThemeProvider>
</template>

<script>
import ThemeProvider from "../../ThemeProvider.vue";
import theme from "../../baseTheme.ts";
import { action } from "@storybook/addon-actions";

import Button from "../Button.vue";

export default {
  name: "ButtonStatus",
  components: { Button, ThemeProvider },
  data() {
    return {
      theme
    };
  },
  methods: {
    onClick() {
      console.log("clicked");
      action("clicked");
    }
  }
};
</script>

<style scoped>
div.container > button {
  margin-bottom: 10px;
}
</style>

<include-source></include-source>
