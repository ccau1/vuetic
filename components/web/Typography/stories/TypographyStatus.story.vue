<template>
  <ThemeProvider :theme="theme">
    <div>
      <Typography>Default Typography</Typography>
      <Typography status="primary">primary Typography</Typography>
      <Typography status="success">success Typography</Typography>
      <Typography status="info">info Typography</Typography>
      <Typography status="danger">danger Typography</Typography>
      <Typography status="hint">hint Typography</Typography>
      <Button status="primary">Primary Button</Button>
    </div>
  </ThemeProvider>
</template>

<script>
import ThemeProvider from "../../ThemeProvider.vue";
import theme from "../../baseTheme.ts";
import Typography from "../Typography.vue";
import Button from "../../Button/Button.vue";
console.log("theme", theme);

export default {
  name: "TypographyStatus",
  components: { Typography, Button, ThemeProvider },
  data() {
    return {
      theme
    };
  }
};
</script>

<include-source />
