<template>
  <MainLayout>
    <PostDetail :slug="this.$route.params.slug" />
  </MainLayout>
</template>

<script>
import PostDetail from "@/containers/Post/PostDetail";
import MainLayout from "./_layouts/MainLayout";

export default {
  components: {
    MainLayout,
    PostDetail
  }
};
</script>
