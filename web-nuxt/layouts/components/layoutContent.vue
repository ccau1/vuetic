<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    headerFixed: {
      type: Boolean,
    },
    footerFixed: {
      type: Boolean,
    },
    boxed: {
      type: Boolean,
    },
    headerHeight: {
      type: String,
      default: "70px",
    },
    footerHeight: {
      type: String,
      default: "100px",
    },
  },
  defineEmits: ["onDismiss"],
});
</script>
<template>
  <div
    class="contentWrapper"
    :style="{ '--headerHeight': headerHeight, '--footerHeight': footerHeight }"
  >
    <header :class="[headerFixed ? 'fixed' : '']">
      <slot name="header" />
    </header>
    <main>
      <slot name="content" />
      <slot />
    </main>
    <footer :class="[footerFixed ? 'fixed' : '']">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped lang="scss">
.contentWrapper {
  position: relative;
  overflow: auto;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
header {
  position: relative;
  z-index: 10;
  background-color: yellow;
  height: var(--headerHeight);
  width: 100%;

  &.fixed {
    position: sticky;
    top: 0;
    width: inherit;
  }
}
footer {
  position: relative;
  height: var(--footerHeight);
  background-color: blue;
  width: 100%;
  z-index: 10;

  &.fixed {
    position: sticky;
    bottom: 0;
    width: inherit;
  }
}
main {
  background-color: pink;
  min-height: calc(100% - var(--headerHeight) - var(--footerHeight));
}
</style>
