<template>
  <ThemeProvider :theme="theme">
    <Dropdown text="Colors" direction="bottom">
      <DropdownItem text="Blue" @click="itemClick('Blue')" />
      <DropdownItem text="Green" @click="itemClick('Green')" />
      <DropdownSeparator />
      <DropdownItem text="Red" @click="itemClick('Red')" />
    </Dropdown>
  </ThemeProvider>
</template>

<script>
import { action } from "@storybook/addon-actions";
import ThemeProvider from "../../ThemeProvider.vue";
import theme from "../../baseTheme.ts";

import Dropdown from "../Dropdown.vue";
import DropdownItem from "../DropdownItem.vue";
import DropdownSeparator from "../DropdownSeparator.vue";

export default {
  name: "DropdownBasic",
  components: { Dropdown, DropdownItem, DropdownSeparator, ThemeProvider },
  data() {
    return {
      theme
    };
  },
  methods: {
    itemClick(text) {
      console.log("clicked", text);
      action(`DropdownItem clicked: ${text}`);
    }
  }
};
</script>

<include-source />
