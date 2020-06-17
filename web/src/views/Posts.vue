<template>
  <MainLayout>
    <Typography category="h3">Post List</Typography>
    <PostList />
    <!-- {{this.$route.params.slug}} -->
  </MainLayout>
</template>

<script>
import PostList from "@/containers/Post/PostList";
import MainLayout from "./_layouts/MainLayout";

export default {
  name: "Posts",
  components: {
    MainLayout,
    PostList
  }
};
</script>
