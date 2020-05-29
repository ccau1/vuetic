<template>
  <ThemeProvider :theme="theme">
    <Dropdown text="Colors">
      <DropdownItem text="Blue" />
      <DropdownItem text="Green" />
      <DropdownItem text="Red" />
    </Dropdown>
  </ThemeProvider>
</template>

<script>
import Dropdown from "../Dropdown.vue";
import DropdownItem from "../DropdownItem.vue";
import DropdownSeparator from "../DropdownSeparator.vue";
import ThemeProvider from "../../ThemeProvider.vue";
import theme from "../../baseTheme.ts";

export default {
  name: "DropdownDisabled",
  components: { Dropdown, DropdownItem, DropdownSeparator, ThemeProvider },
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
