<template>
  <MainLayout>
    <div class="container">
      <img class="logo" alt="Vue logo" src="../assets/logo.png" />
      <TodoForm />
      <Spacer height="10px" />
      <TodoList />
    </div>
  </MainLayout>
</template>

<script>
// @ is an alias to /src
import TodoForm from "@/containers/Todo/TodoForm";
import TodoList from "@/containers/Todo/TodoList";
import MainLayout from "./_layouts/MainLayout";

export default {
  name: "Todos",
  components: {
    MainLayout,
    TodoList,
    TodoForm
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
}
.logo {
  display: block;
  margin: 0 auto;
}
</style>
