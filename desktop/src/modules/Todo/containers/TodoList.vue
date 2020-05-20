<template>
  <div>
    <div class="list-item" v-for="item in todos" :key="item._id">
      <TodoListItem
        :item="item"
        @click="item.isCompleted = !item.isCompleted"
        @deleteItem="deleteTodo(item._id)"
      />
    </div>
    <div v-if="todos.length === 0" class="empty-todo-list">
      Empty todo list
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TodoListItem from "../components/TodoListItem";

export default {
  name: "TodoList",
  components: { TodoListItem },
  computed: mapGetters(["todos"]),
  methods: mapActions(["deleteTodo"])
};
</script>

<style lang="scss" scoped>
.empty-todo-list {
  text-align: center;
}
</style>
