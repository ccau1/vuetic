<template>
  <ThemeProvider :theme="theme">
    <div>
      <Checkbox :checked="isRememberMe" :showLineThrough="true" @change="() => isRememberMe = !isRememberMe" label="With line through" />
      <Checkbox :checked="isRememberMe" :showLineThrough="false" @change="() => isRememberMe = !isRememberMe" label="Without line through" />
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
