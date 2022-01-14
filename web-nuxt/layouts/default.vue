<script setup>
import { ref } from "vue";
import SideBar from "../components/sidebar.vue";
import LayoutContent from "./components/layoutContent.vue";

const state = ref({
  nav: {
    left: { open: true, fixed: true, elevation: "middle", float: false },
    right: { open: true, fixed: false, elevation: "top", float: false },
  },
  header: {
    fixed: true,
    height: "70px",
  },
  footer: {
    fixed: true,
    height: "200px",
  },
  boxed: true,
});
</script>

<template>
  <div :class="['layoutWrapper']">
    <SideBar
      slotName="leftPanelContent"
      :isOpen="state.nav.left.open"
      side="left"
      :elevation="state.nav.left.elevation"
      :float="state.nav.left.float"
      @onDismiss="state.nav.left.open = false"
      overlay="true"
    >
      <template v-slot:leftPanelContent> <p>left bar content</p></template>
      <SideBar
        slotName="rightPanelContent"
        :isOpen="state.nav.right.open"
        side="right"
        :elevation="state.nav.right.elevation"
        :float="state.nav.right.float"
        @onDismiss="state.nav.right.open = false"
      >
        <template v-slot:rightPanelContent> <p>right bar content</p></template>
        <LayoutContent
          :headerFixed="state.header.fixed"
          :footerFixed="state.footer.fixed"
          :boxed="state.boxed"
          :headerHeight="state.header.height"
          :footerHeight="state.footer.height"
        >
          <template v-slot:header>
            <div style="display: flex; justify-content: center">
              <button @click="state.nav.left.open = !state.nav.left.open">
                {{ state.nav.left.open ? "close" : "open" }} left nav
              </button>
              <button @click="state.nav.right.open = !state.nav.right.open">
                {{ state.nav.right.open ? "close" : "open" }} right nav
              </button>
              <button @click="state.nav.right.float = !state.nav.right.float">
                right float: {{ state.nav.right.float ? "true" : "false" }}
              </button>
              <button @click="state.nav.left.float = !state.nav.left.float">
                left float: {{ state.nav.left.float ? "true" : "false" }}
              </button>
              <button @click="state.header.fixed = !state.header.fixed">
                header fixed: {{ state.header.fixed ? "true" : "false" }}
              </button>
              <button @click="state.footer.fixed = !state.footer.fixed">
                footer fixed: {{ state.footer.fixed ? "true" : "false" }}
              </button>
              <button
                @click="
                  state.nav.left.elevation =
                    state.nav.left.elevation === 'top'
                      ? 'bottom'
                      : state.nav.left.elevation === 'bottom'
                      ? 'middle'
                      : 'top'
                "
              >
                left elevation: {{ state.nav.left.elevation }}
              </button>
              <button
                @click="
                  state.nav.right.elevation =
                    state.nav.right.elevation === 'top'
                      ? 'bottom'
                      : state.nav.right.elevation === 'bottom'
                      ? 'middle'
                      : 'top'
                "
              >
                right elevation: {{ state.nav.right.elevation }}
              </button>
            </div>
          </template>
          <template v-slot:content><slot name="content" /></template>
          <template v-slot:default><slot name="default" /></template>
          <template v-slot:footer><slot name="footer" /></template>
        </LayoutContent>
      </SideBar>
    </SideBar>
  </div>
</template>

<style scoped lang="scss">
.layoutWrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: green;
  display: flex;
  flex-direction: row;
}
</style>
