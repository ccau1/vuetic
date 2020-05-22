<template>
  <MainLayout>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "./_layouts/MainLayout";
export default {
  name: "Home",
  components: { MainLayout }
};
</script>
