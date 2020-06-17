<template>
  <div>
    <!--FIX WARN: v-for="post in posts.reverse()" -->
    <Card
      :key="post.slug"
      v-for="post in posts.reverse()"
      @click="$emit('click', post)"
      :style="containerStyle"
    >
      <CardContent>
        <Typography category="h3" color="primary">{{ post.title }}</Typography>
        <Typography color="secondary"
          >Date Created :
          {{ new Date(post.createdAt).toLocaleString() }}</Typography
        >
        <Typography category="h4">Created By : {{ post.createdBy }}</Typography>
        <Typography>Categories : {{ post.categories }}</Typography>
      </CardContent>
    </Card>
  </div>
</template>

<script>
export default {
  props: {
    posts: Array
  },
  inject: ["theme"],
  computed: {
    containerStyle() {
      const styles = {
        marginBottom: "10px",
        cursor: "pointer"
      };
      console.log("containerStyle", styles, this.theme);
      return styles;
    }
  }
};
</script>

<style lang="scss" scoped>
.post-list-component {
  // margin: 20px 0;
  // cursor: pointer;
  // // background-color: #ffffff;
  // border-radius: 5px;
  // padding: 23px;
  // border: 1px solid rgba(194, 194, 194, 0.356);
  // box-shadow: 0 1px 4px rgba(230, 230, 230, 1);
  // height: 300px;
  &:hover {
    background-color: #ffffff96;
  }
}
</style>
