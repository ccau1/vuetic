<template>
  <nav>
    <div v-for="(route, index) in routes" :key="route.path">
      <span class="separator" v-if="index > 0">|</span>
      <router-link :to="route.path">{{ route.name }}</router-link>
    </div>
  </nav>
</template>

<script>
import { routes } from "@/router/index.ts";
export default {
  data() {
    return { routes };
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
