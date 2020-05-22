<template>
  <nav>
    <div v-for="(route, index) in routes" :key="route.path">
      {{ index > 0 ? " | " : "" }}
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

  & a {
    padding: 5px;
    color: inherit;
  }
}
</style>
