<template>
  <div :style="containerStyle">
    <!-- <p>This is Post Detail component</p> -->
    <Typography category="h1" color="primary"
      >Title : {{ post.title }}</Typography
    >
    <Typography color="secondary"
      >Date Created :
      {{ new Date(post.createdAt).toLocaleString() }}</Typography
    >
    <Typography category="h4">CreatedBy : {{ post.createdBy }}</Typography>
    <Typography>Categories : {{ post.categories }}</Typography>
    <Spacer />
    <div v-html="post.content" />
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
    locale: String
  },
  inject: ["theme"],
  computed: {
    containerStyle() {
      const styles = {
        marginBottom: "10px"
      };
      return styles;
    }
  }
};
</script>

<style></style>
