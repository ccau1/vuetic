<template>
  <div>
    <PostList
      :posts="posts"
      @click="post => $router.push(`/posts/slugs/${post.slug}`)"
    />
  </div>
</template>

<script>
import PostList from "../../components/Post/PostList";
import { getPosts } from "../../../../models/src/apis/postApi";

export default {
  components: {
    PostList
  },
  data() {
    return {
      posts: []
    };
  },
  async mounted() {
    const postsData = await getPosts();
    this.posts = postsData;
    console.log(this.posts);
  }
};
</script>
