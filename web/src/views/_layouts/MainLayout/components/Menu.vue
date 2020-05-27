<template>
  <nav>
    <Dropdown
      text="Menu"
      direction="bottom"
      :backgroundColor="menuBackgroundColor"
      v-breakpoint:show="['xs', 'sm']"
    >
      <DropdownItem active text="Home" @click="goTo('/')" />
      <DropdownItem disabled active text="Item 2" />
      <DropdownSeparator />
      <DropdownItem text="Todos" @click="goTo('/todos')" />
      <Dropdown direction="left" text="sub menu">
        <DropdownItem disabled active text="Item 2" />
        <DropdownSeparator />
        <DropdownItem text="Item 3" />
      </Dropdown>
    </Dropdown>
    <div
      v-for="(route, index) in routes"
      :key="route.path"
      v-breakpoint:show="['md', 'lg', 'xl']"
    >
      <span class="separator" v-if="index > 0">|</span>
      <router-link :to="route.path">{{ route.name }}</router-link>
    </div>
  </nav>
</template>

<script>
import { routes } from "@/router/index.ts";
export default {
  inject: ["theme"],
  data() {
    return { routes };
  },
  methods: {
    goTo(path) {
      this.$router.push(path).catch(err => err);
    }
  },
  computed: {
    menuBackgroundColor() {
      // define a menu background color
      return "#fff"; // this.theme?.colors?.primary;
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;

  & .separator {
    margin: 0 5px;
  }
  & a {
    padding: 5px 10px;
    color: inherit;
    text-decoration: none;
    border-radius: 2px;
  }
  & a:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  & a.router-link-exact-active {
    background-color: rgba(255, 255, 255, 0.2);
  }
}
</style>
