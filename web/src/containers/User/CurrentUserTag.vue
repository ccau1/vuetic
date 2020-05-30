<template>
  <UserTag :user="currentUser" />
</template>

<script>
import { mapGetters } from "vuex";
import UserTag from "@/components/User/UserTag";

export default {
  components: { UserTag },
  computed: {
    ...mapGetters(["currentUser"])
  }
};
</script>

<style></style>
