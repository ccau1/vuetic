<template>
  <MainLayout>
    <div class="container">
      <CreatePost />
    </div>
  </MainLayout>
</template>

<script>
import CreatePost from "@/containers/Post/CreatePost";
import MainLayout from "./_layouts/MainLayout";
export default {
  components: { MainLayout, CreatePost }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
}
</style>
