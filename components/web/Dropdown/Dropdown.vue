<template>
  <div
    class="dd-container"
    :style="containerStyle"
    :class="'direction-' + direction"
    @mouseenter="onMouseEnterButton"
    @mouseleave="onMouseLeaveButton"
  >
    <div
      class="dd-item-wrapper"
      @click="buttonClick"
      :class="{ 'label-floated': text }"
    >
      <label v-if="label">{{ label }}</label>
      <DropdownItem
        :text="text"
        v-click-outside="() => setIsOpen(false)"
        :style="[buttonStyle, { paddingRight: '28px' }]"
      />
      <FontAwesomeIcon
        :style="arrowIconStyle"
        class="dd-text-icon"
        size="sm"
        icon="chevron-down"
      />
    </div>
    <div class="dd-content-container">
      <div class="dd-content" v-if="isOpen" :style="contentStyle">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ClickOutside from "vue-click-outside";
import DropdownItem from "./DropdownItem";

library.add(faChevronDown);

export default {
  name: "Dropdown",
  props: {
    text: String,
    direction: {
      default: "bottom",
      type: String,
      enum: ["left", "right", "top", "bottom"]
    },
    openOnHover: {
      type: Boolean,
      default: true
    },
    closeOnMouseLeave: {
      type: Boolean,
      default: true
    },
    click: {
      type: Function
    },
    backgroundColor: {
      type: String
    },
    label: {
      type: String
    }
  },
  components: { FontAwesomeIcon, DropdownItem },
  directives: { ClickOutside },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    onMouseEnterButton(ev) {
      // FIXME: in mobile, on first tap, it'll trigger this,
      // which sets it to true, then triggers the buttonClick()
      // buttonClick will have this.isOpen true, which sets it back
      // to false
      if (this.openOnHover) {
        this.setIsOpen(true);
      }
      ev.stopPropagation();
    },
    onMouseLeaveButton(ev) {
      if (this.closeOnMouseLeave) {
        this.setIsOpen(false);
      }
      ev.stopPropagation();
    },
    setIsOpen(isOpen) {
      this.isOpen = isOpen !== undefined ? isOpen : !this.isOpen;
    },
    buttonClick(ev) {
      if (this.$listeners?.click) {
        this.$listeners?.click();
      } else {
        this.setIsOpen(!this.isOpen);
      }
      ev.stopPropagation();
    }
  },
  computed: {
    buttonStyle() {
      const buttonStyle = {};
      if (this.$parent.$options.name !== "Dropdown") {
        // if parent is not a dropdown, make it look
        // more like a dropdown button
        buttonStyle.border = "1px solid rgba(0, 0, 0, 0.3)";
        buttonStyle.borderRadius = "5px";
      }
      return buttonStyle;
    },
    contentStyle() {
      const contentStyle = {};
      if (this.backgroundColor) {
        contentStyle.backgroundColor = this.backgroundColor;
      } else if (
        this.$parent.$options.name === "Dropdown" &&
        this.$parent.backgroundColor
      ) {
        // if parent is a dropdown and has props backgroundColor,
        // follow it
        contentStyle.backgroundColor = this.$parent.backgroundColor;
      }

      switch (this.direction) {
        case "left":
          contentStyle.top = 0;
          contentStyle.right = "2px";
          break;
        case "right":
          contentStyle.top = 0;
          contentStyle.left = "2px";
          break;
        case "bottom":
          contentStyle.top = "2px";
          contentStyle.left = 0;
          break;
        case "top":
          contentStyle.bottom = "2px";
          contentStyle.left = 0;
          break;
      }

      return contentStyle;
    },
    containerStyle() {
      const containerStyle = {};

      return containerStyle;
    },
    arrowIconRotation() {
      let rotation = 0;
      switch (this.direction) {
        case "left":
          rotation = this.isOpen ? -90 : 90;
          break;
        case "right":
          rotation = this.isOpen ? 90 : -90;
          break;
        case "top":
          rotation = this.isOpen ? 0 : 180;
          break;
        case "bottom":
        default:
          rotation = this.isOpen ? 180 : 0;
      }
      return rotation;
    },
    arrowIconStyle() {
      const style = {};
      style.transform = `rotate(${this.arrowIconRotation}deg) translateY(-50%)`;

      return style;
    }
  }
};
</script>

<style lang="scss" scoped>
.dd-container {
  position: relative;
  display: flex;
  &.direction-bottom {
    flex-direction: column;
  }
  &.direction-top {
    flex-direction: column-reverse;
  }
  &.direction-left {
    flex-direction: row-reverse;
  }
  &.direction-right {
    flex-direction: row;
  }
}
.dd-item-wrapper {
  min-height: 40px;
}
.dd-item-wrapper label {
  position: absolute;
  top: 9px;
  left: 10px;
  padding: 2px 10px;
  z-index: 1;
  opacity: 0.4;
  user-select: none;
  background-color: transparent;
  color: #000;

  transition: all 300ms;
}
.label-floated label {
  top: -10px;
  transform: scale(0.8) translateX(-4%);
  opacity: 1;
  border-radius: 5px 5px 0 0;
  background-color: #fff;
}
.dd-item {
  min-height: 40px;
  box-sizing: border-box;
}

.dd-text-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
  transform-origin: 50% 0%;
  transition: all 500ms ease-out;
}
.dd-button {
  padding: 10px 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}
.dd-content-container {
  position: relative;
  padding: 2px;
}
.dd-content {
  position: absolute;
  min-width: 100%;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  z-index: 100;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
