<template>
  <div class="create-post">
    <CreatePostForm @submit="sendPostForm" />
  </div>
</template>

<script>
import CreatePostForm from "@/components/Post/CreatePostForm";
import { addPost } from "../../../../models/src/apis/postApi";

export default {
  components: {
    CreatePostForm
  },
  methods: {
    async sendPostForm(postVal) {
      // console.log("createPostForm", postVal);
      const res = await addPost(postVal);
      if (res) {
        console.log("post create");
        this.$router.push("/posts");
      } else {
        console.log("error");
      }
    }
  }
};
</script>
