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
import TodoForm from "@/modules/Todo/containers/TodoForm";
import TodoList from "@/modules/Todo/containers/TodoList";

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
