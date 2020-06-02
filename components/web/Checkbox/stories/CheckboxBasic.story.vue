<template>
  <ThemeProvider :theme="theme">
    <div>
      <Checkbox :checked="isRememberMe" @change="() => isRememberMe = !isRememberMe" label="Remember Me" />
      <Checkbox :checked="!isRememberMe" @change="() => isRememberMe = !isRememberMe" label="Don't Remember Me" />
    </div>
  </ThemeProvider>
</template>

<script>
import ThemeProvider from "../../ThemeProvider.vue";
import theme from "../../baseTheme.ts";
import Checkbox from "../Checkbox.vue";

export default {
  name: "CheckboxBasic",
  components: { Checkbox, ThemeProvider },
  data() {
    return {
      theme,
      isRememberMe: false
    };
  }
};
</script>

<include-source />
