<template>
  <div class="user-tag-container" :class="{ rounded }">
    <UserAvatar
      :username="user.username"
      :src="user.avatar"
      :rounded="avatarRounded"
      :size="avatarSize"
    />
    <Spacer width="5px" />
    <Typography>{{ user.username }}</Typography>
  </div>
</template>

<script lang="ts">
import UserAvatar from "@/components/User/UserAvatar.vue";
export default {
  props: {
    user: Object,
    rounded: { type: Boolean, default: true },
    avatarRounded: {
      type: Boolean,
      default: true
    },
    avatarSize: {
      type: Number,
      default: 30
    }
  },
  components: { UserAvatar }
};
</script>

<style scoped>
.user-tag-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.user-tag-container.rounded {
  border-radius: 10px;
}
</style>
