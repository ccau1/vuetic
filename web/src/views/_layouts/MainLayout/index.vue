<template>
  <LayoutContainer>
    <Header />
    <Main>
      <slot />
    </Main>
    <Footer />
  </LayoutContainer>
</template>

<script>
import LayoutContainer from "./LayoutContainer.vue";
import Header from "./Header.vue";
import Main from "./Main.vue";
import Footer from "./Footer.vue";

export default {
  components: { LayoutContainer, Header, Main, Footer }
};
</script>

<style scoped></style>
