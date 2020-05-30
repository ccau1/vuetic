<template>
  <ThemeProvider :theme="theme">
    <div>
      <Typography>Default Typography (inherit)</Typography>
      <Typography color="primary">primary Typography</Typography>
      <Typography color="secondary">secondary Typography</Typography>
      <Typography color="success">success Typography</Typography>
      <Typography color="info">info Typography</Typography>
      <Typography color="danger">danger Typography</Typography>
      <Typography color="hint">hint Typography</Typography>
      <Typography color="inherit"
        >inherit Typography (color from parent)</Typography
      >
    </div>
  </ThemeProvider>
</template>

<script>
import ThemeProvider from "../../ThemeProvider.vue";
import theme from "../../baseTheme.ts";
import Typography from "../Typography.vue";

export default {
  name: "TypographyColor",
  components: { Typography, ThemeProvider },
  data() {
    return {
      theme
    };
  }
};
</script>

<include-source />
