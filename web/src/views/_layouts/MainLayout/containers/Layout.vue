<template>
  <LayoutContainer>
    <Header
      :title="title"
      @toggleSideBar="setIsSideBarOpen"
      :isSideBarOpen="isSideBarOpen"
    />
    <Content>
      <transition name="side-bar">
        <SideBar v-if="isSideBarOpen" />
      </transition>
      <Main>
        <slot />
      </Main>
    </Content>
    <Footer />
  </LayoutContainer>
</template>

<script>
import LayoutContainer from "../components/LayoutContainer.vue";
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";
import Footer from "../components/Footer.vue";
import Content from "../components/Content.vue";
import SideBar from "../components/SideBar.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { LayoutContainer, Content, Header, SideBar, Main, Footer },
  data() {
    return {
      title: "App Title"
    };
  },
  computed: {
    ...mapGetters(["isSideBarOpen"])
  },
  methods: {
    ...mapActions(["setIsSideBarOpen"])
  }
};
</script>

<style scoped>
.side-bar-enter-active,
.side-bar-leave-active {
  transition: width 0.25s ease-out;
}

.side-bar-enter,
.side-bar-leave-to {
  width: 0;
}
</style>
