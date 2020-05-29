<template>
  <ThemeProvider :theme="theme">
    <ErrorMessage>This field is required</ErrorMessage>
  </ThemeProvider>
</template>

<script>
import ThemeProvider from "../../ThemeProvider.vue";
import theme from "../../baseTheme.ts";
import ErrorMessage from "../ErrorMessage.vue";

export default {
  name: "ErrorMessageBasic",
  components: { ErrorMessage, ThemeProvider },
  data() {
    return {
      theme
    };
  }
};
</script>

<include-source />
