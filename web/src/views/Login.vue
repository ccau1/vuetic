<template>
  <div class="page-container">
    <div class="page-background" />
    <div class="login-form-container">
      <!-- <div class="page-background blurred" /> -->
      <LoginForm @onLoggedIn="onLoggedIn" />
    </div>
  </div>
</template>

<script>
import LoginForm from "../containers/Auth/LoginForm.vue";
export default {
  name: "LoginView",
  components: { LoginForm },
  methods: {
    onLoggedIn() {
      this.$router.replace(this.$route.query.redirectUrl || "/");
    }
  }
};
</script>

<style scoped>
.page-container {
  width: 100%;
  height: 100%;
}
.page-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://www.vibutechnix.com/projectms/application/themes/default/common/images/login-background.jpg");
  background-position: center center;
}
.page-background.blurred {
  filter: blur(8px);
  -webkit-filter: blur(8px);
}
.login-form-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 400px;
  max-width: 100%;
  max-height: 100%;
  overflow-y: auto;

  background-color: rgba(255, 255, 255, 0.7);
  padding: 140px 30px;
  box-sizing: border-box;
}
</style>
