<template>
  <div class="app-bar">
    <div class="nav-left">
      <div class="slot-left-icon" @click="(ev) => $emit('onLeftIconClick', ev)">
        <slot name="left">
          <FontAwesomeIcon v-if="leftIcon === 'bars'" icon="bars" fixed-width />
          <FontAwesomeIcon
            v-if="leftIcon === 'chevron-left'"
            icon="chevron-left"
            fixed-width
          />
        </slot>
      </div>
      <div class="nav-title">
        <Typography color="inherit">{{ title }}</Typography>
      </div>
      <div class="left-inner-slot">
        <slot />
      </div>
    </div>
    <div class="nav-right">
      <slot name="right">default right side</slot>
    </div>
  </div>
</template>

<script>
import Typography from "../Typography/Typography.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);
library.add(faChevronLeft);

export default {
  name: "AppBar",
  props: {
    title: {
      type: String
    },
    subtitle: String,
    leftIcon: {
      type: String,
      default: "bars",
      validator: (val) => ["bars", "chevron-left"].includes(val)
    },
    onLeftIconClick: Function
  },
  inject: ["theme"],
  components: {
    Typography,
    FontAwesomeIcon
  }
};
</script>

<style lang="scss" scoped>
.app-bar {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  height: 50px;
  background: #506eec;
  color: #fff;
}
.nav-left {
  margin-left: 50px;
  display: flex;
  align-self: center;
}
.nav-title {
  margin: 0px 10px 0px 10px;
}
.slot-left-icon {
  margin: 0px 10px 0px 10px;
  align-self: center;
}
.left-inner-slot {
  margin: 0px 10px 0px 10px;
  align-self: center;
}
.nav-right {
  margin-right: 50px;
  align-self: center;
}
</style>
