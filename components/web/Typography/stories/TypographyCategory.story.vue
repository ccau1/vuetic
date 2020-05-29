<template>
  <ThemeProvider :theme="theme">
    <div>
      <Typography>Default Typography</Typography>
      <Typography category="h1">h1 Typography</Typography>
      <Typography category="h2">h2 Typography</Typography>
      <Typography category="h3">h3 Typography</Typography>
      <Typography category="h4">h4 Typography</Typography>
      <Typography category="subtitle1">subtitle1 Typography</Typography>
      <Typography category="subtitle2">subtitle2 Typography</Typography>
      <Typography category="body1">body1 Typography</Typography>
      <Typography category="body2">body2 Typography</Typography>
      <Typography category="button1">button1 Typography</Typography>
      <Typography category="button2">button2 Typography</Typography>
      <Typography category="caption1">caption1 Typography</Typography>
      <Typography category="caption2">caption2 Typography</Typography>
      <Typography category="label1">label1 Typography</Typography>
      <Typography category="label2">label2 Typography</Typography>
    </div>
  </ThemeProvider>
</template>

<script>
import ThemeProvider from "../../ThemeProvider.vue";
import theme from "../../baseTheme.ts";
import Typography from "../Typography.vue";

export default {
  name: "TypographyCategory",
  components: { Typography, ThemeProvider },
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
