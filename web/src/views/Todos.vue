<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TodoForm />
    <Spacer height="10px" />
    <TodoList />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoForm from "@/containers/Todo/TodoForm";
import TodoList from "@/containers/Todo/TodoList";

export default {
  name: "Todos",
  components: {
    TodoList,
    TodoForm
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
