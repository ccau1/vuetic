<template>
  <avatar :username="_username" :src="src" :rounded="rounded" :size="size" />
</template>

<script>
import Avatar from "vue-avatar";
export default {
  props: {
    username: String,
    src: String,
    rounded: Boolean,
    size: Number
  },
  computed: {
    _username() {
      return this.username.replace(/[_\-.]+/, " ").replace("  ", " ");
    }
  },
  components: { Avatar }
};
</script>

<style></style>
