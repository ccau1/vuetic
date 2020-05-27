<template>
  <div class="dd-container" :style="containerStyle" :class="'direction-' + direction"
      @mouseenter="onMouseEnterButton"
      @mouseleave="onMouseLeaveButton">
    <div class="dd-item-wrapper">
      <DropdownItem
        :text="text"
        @click="buttonClick"
        v-click-outside="() => setIsOpen(false)"
        :style="[buttonStyle, {paddingRight: '28px'}]"
        />
      <FontAwesomeIcon :transform="{ rotate: iconRotation }" class="dd-text-icon" size="sm" icon="chevron-down" />
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

library.add(faChevronDown);

export default {
  name: 'Dropdown',
  props: {
    text: String,
    direction: {
      default: "bottom",
      type: String,
      enum: ['left', 'right', 'top', 'bottom']
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
    }
  },
  components: { FontAwesomeIcon },
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
      if (this.$parent.$options.name !== 'Dropdown') {
        // if parent is not a dropdown, make it look
        // more like a dropdown button
        buttonStyle.border = '1px solid rgba(0, 0, 0, 0.3)';
        buttonStyle.borderRadius = '5px';
      }
      return buttonStyle;
    },
    contentStyle() {
      const contentStyle = {};
      if (this.backgroundColor) {
        contentStyle.backgroundColor = this.backgroundColor;
      } else if (this.$parent.$options.name === 'Dropdown' && this.$parent.backgroundColor) {
        // if parent is a dropdown and has props backgroundColor,
        // follow it
        contentStyle.backgroundColor = this.$parent.backgroundColor;
      }

      switch (this.direction) {
        case 'left':
          contentStyle.top = 0;
          contentStyle.right = '2px';
          break;
        case 'right':
          contentStyle.top = 0;
          contentStyle.left = '2px';
          break;
        case 'bottom':
          contentStyle.top = '2px';
          contentStyle.left = 0;
          break;
        case 'top':
          contentStyle.bottom = '2px';
          contentStyle.left = 0;
          break;
      }

      return contentStyle;
    },
    containerStyle() {
      const containerStyle = {};

      return containerStyle;
    },
    iconRotation() {
      switch (this.direction) {
        case 'left':
          return 90;
        case 'right':
          return -90;
        case 'top':
          return 180;
        case 'bottom':
        default:
          return 0;
      }
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
  display: flex;
  flex-direction: row;
}
.dd-text-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
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