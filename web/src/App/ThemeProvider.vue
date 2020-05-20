<template>
  <ThemeProvider :theme="theme">
    <slot />
  </ThemeProvider>
</template>

<script>
import ThemeProvider from "../../../components/web/ThemeProvider.vue";

export default {
  components: { ThemeProvider },
  data() {
    return {
      theme: {
        colors: {
          primary: "#2196F3",
          secondary: "#E91E63",
          info: "#03A9F4",
          danger: "#F44336",
          warning: "#FFC107",
          success: "#4CAF50",
          test: {
            zero: "$test.one",
            one: "$primary",
            two: "$test.one"
          }
        },
        dimensions: {
          scale: 1.5,
          screenHorizontalPadding: "$scale * 20"
        }
      }
    };
  }
};
</script>
