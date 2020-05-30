<template>
  <ThemeProvider :theme="theme">
    <div>
      <Dropdown :text="selected" direction="bottom" label="Color Select">
        <DropdownItem text="Blue" @click="itemClick('Blue')" />
        <DropdownItem text="Green" @click="itemClick('Green')" />
        <DropdownItem text="Red" @click="itemClick('Red')" />
        <DropdownSeparator />
        <Dropdown direction="right" text="Fancy Colors">
          <DropdownItem text="Teal Green" />
          <DropdownItem text="Emerald Pink" />
        </Dropdown>
        <DropdownSeparator />
        <DropdownItem text="Clear" @click="itemClick('')" />
      </Dropdown>
      <Spacer height="200px" />
    </div>
  </ThemeProvider>
</template>

<script>
import { action } from "@storybook/addon-actions";
import ThemeProvider from "../../ThemeProvider.vue";
import theme from "../../baseTheme.ts";
import Spacer from "../../Spacer";

import Dropdown from "../Dropdown.vue";
import DropdownItem from "../DropdownItem.vue";
import DropdownSeparator from "../DropdownSeparator.vue";

export default {
  name: "DropdownBasic",
  components: {
    Dropdown,
    DropdownItem,
    DropdownSeparator,
    ThemeProvider,
    Spacer
  },
  data() {
    return {
      theme,
      selected: ""
    };
  },
  methods: {
    itemClick(text) {
      this.selected = text;
      console.log("clicked", text);
      action(`DropdownItem clicked: ${text}`);
    }
  }
};
</script>

<include-source />
