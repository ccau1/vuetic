<template>
  <div>
    <div class="list-item" v-for="item in todos" :key="item._id">
      <TodoListItem
        :item="item"
        @click="
          updateTodo({
            _id: item._id,
            todo: { isCompleted: !item.isCompleted }
          })
        "
        @deleteItem="deleteTodo({ _id: item._id })"
      />
    </div>
    <div v-if="!todos || todos.length === 0" class="empty-todo-list">
      {{ $t("msg.emptyList") }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TodoListItem from "../../components/Todo/TodoListItem";

export default {
  name: "TodoList",
  components: { TodoListItem },
  created() {
    this.getTodos();
  },
  computed: mapGetters(["todos"]),
  methods: mapActions(["getTodos", "updateTodo", "deleteTodo"])
};
</script>

<style lang="scss" scoped>
.empty-todo-list {
  text-align: center;
}
</style>
