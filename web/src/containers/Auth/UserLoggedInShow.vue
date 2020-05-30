<template>
  <fragment v-if="isCurrentUserLoggedIn">
    <slot />
  </fragment>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentUser", "isLoggedIn"]),
    isCurrentUserLoggedIn() {
      return Boolean(this.currentUser && this.isLoggedIn);
    }
  }
};
</script>

<style></style>
