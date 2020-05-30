<template>
  <Button @click="logout">Logout</Button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: mapActions(["logout"])
};
</script>
