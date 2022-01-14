<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    side: {
      type: String,
      validator(value) {
        // The value must match one of these strings
        return ["left", "right"].includes(value);
      },
      default: "left",
    },
    elevation: {
      type: String,
      validator(value) {
        // The value must match one of these strings
        return ["bottom", "middle", "top"].includes(value);
      },
      default: "top",
    },
    float: {
      type: Boolean,
      default: false,
    },
    overlay: {
      type: Boolean,
      default: false,
    },
    slotName: {
      type: String,
      default: "sidebar",
    },
    width: {
      type: String,
      default: "200px",
    },
    duration: {
      type: Number,
      default: 200,
    },
  },
  defineEmits: ["onDismiss"],
});
</script>

<script setup lang="ts"></script>

<template>
  <div
    :class="['sideBarWrapper']"
    :style="{ '--sidebarWidth': width, '--duration': duration + 'ms' }"
  >
    <aside
      :class="[
        side,
        `elevation_${elevation}`,
        isOpen ? 'open' : 'closed',
        float ? 'float' : 'push',
      ]"
      :style="{ zIndex: elevation === 'top' ? 3 : 2 }"
    >
      <slot :name="slotName" />
    </aside>
    <main
      :class="[
        side,
        `elevation_${elevation}`,
        isOpen ? 'open' : 'closed',
        float ? 'float' : 'push',
      ]"
      :style="{ zIndex: elevation === 'bottom' ? 2 : 1 }"
    >
      <slot />
      <a
        :class="['overlay', overlay && isOpen ? 'open' : 'closed']"
        @click="$emit('onDismiss')"
      />
    </main>
  </div>
</template>

<style scoped lang="scss">
.sideBarWrapper {
  width: 100%;
  height: 100%;
  display: flex;
}
aside {
  position: absolute;
  top: 0;
  width: var(--sidebarWidth);
  height: 100%;
  transition: left var(--duration), right var(--duration);
  background-color: white;

  &.elevation_top.open {
    box-shadow: 0px 0px 20px 0px #000;
    // z-index: 2;
  }

  &.left {
    left: 0;
    &:not(.elevation_bottom) {
      left: calc(-1 * var(--sidebarWidth));
    }

    &.open {
      left: 0;
    }
  }

  &.right {
    right: 0;
    &:not(.elevation_bottom) {
      right: calc(-1 * var(--sidebarWidth));
    }
    &.open {
      right: 0;
    }
  }
}
main {
  flex: 1;
  box-shadow: 0px 0px 20px 0px #000;
  transition: padding var(--duration), margin var(--duration);

  & .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  &.left {
    &.open:not(.float),
    &.open.elevation_bottom {
      padding-left: var(--sidebarWidth);
    }
  }
  &.right {
    &.open:not(.float),
    &.open.elevation_bottom {
      margin-right: var(--sidebarWidth);
    }
  }
}

.overlay {
  pointer-events: none;
  opacity: 0;
  transition: opacity var(--duration);
  z-index: 10;

  &.open {
    opacity: 1;
    pointer-events: auto;
  }
}
</style>
