<template>
  <div>
    <!-- <p>This is Post detail container</p> -->
    <PostDetail :post="post" />
  </div>
</template>

<script>
import PostDetail from "../../components/Post/PostDetail";
// import { getPostById } from "../../../../models/src/apis/postApi";
import { getPostBySlug } from "../../../../models/src/apis/postApi";

export default {
  components: {
    PostDetail
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      post: {}
    };
  },
  async mounted() {
    // const postData = await getPostById(this.slug);
    const postData = await getPostBySlug(this.slug);
    console.log(postData);
    this.post = postData;
  }
};
</script>
