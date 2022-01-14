<template>
  <ThemeProvider :theme="theme">
    <TextInput
      label="Username"
      :value="text"
      @input="(ev) => (this.text = ev.target.value)"
    />
  </ThemeProvider>
</template>

<script>
import ThemeProvider from "../../ThemeProvider.vue";
import theme from "../../baseTheme.ts";
import TextInput from "../TextInput.vue";

export default {
  name: "TextInputBasic",
  components: { TextInput, ThemeProvider },
  data() {
    return {
      theme,
      text: ""
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
