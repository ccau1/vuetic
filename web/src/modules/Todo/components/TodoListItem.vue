<template>
  <div
    class="container"
    :class="{ completed: item.isCompleted }"
    @click="$emit('click')"
  >
    <input type="checkbox" :checked="item.isCompleted" />
    <span class="text">{{ item.text }}</span>
    <FontAwesomeIcon
      class="deleteBtn"
      icon="trash"
      color="#ed5e68"
      @click="e => removeItem(e)"
    />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

export default {
  props: ["item", "click", "deleteItem"],
  components: { FontAwesomeIcon },
  methods: {
    removeItem(e) {
      this.$emit("deleteItem", e, this.item._id);
      e.preventDefault();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  border: 1px solid #eee;
  padding: 10px;
  text-align: left;
  margin-bottom: -1px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  &.completed {
    text-decoration: line-through;
  }
  &:active::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.6);
  }
}
.deleteBtn {
  position: absolute;
  top: 0;
  right: -40px;
  padding: 12px;
  z-index: 1;
}
</style>
