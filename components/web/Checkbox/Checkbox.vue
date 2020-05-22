<template>
  <label>
    <input
      @change="() => this.$emit('change')"
      :checked="checked"
      class="inp-cbx"
      id="cbx"
      type="checkbox"
      style="display: none;"
    />
    <label class="cbx" for="cbx">
      <span>
        <svg width="12px" height="9px" viewBox="0 0 12 9">
          <polyline points="1 5 4 8 11 1" />
        </svg>
      </span>
      <Typography class="label" v-if="label">{{label}}</Typography>
    </label>
  </label>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    checked: {
      type: Boolean
    },
    label: String,
    change: Function
  },
  inject: ["theme"]
};
</script>

<style lang="scss" scoped>
.cbx {
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
}
.cbx span {
  display: inline-block;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}
.cbx span:first-child {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transform: scale(1);
  vertical-align: middle;
  border: 1px solid #b9b8c3;
  transition: all 0.2s ease;
}
.cbx span:first-child svg {
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 6px;
  fill: none;
  stroke: white;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, 0, 0);
}
.cbx span:first-child:before {
  content: "";
  width: 100%;
  height: 100%;
  background: #506eec;
  display: block;
  transform: scale(0);
  opacity: 1;
  border-radius: 50%;
  transition-delay: 0.2s;
}
.cbx .label {
  margin-left: 8px;
}
.cbx .label:after {
  content: "";
  position: absolute;
  top: 8px;
  left: 0;
  height: 1px;
  width: 100%;
  background: #b9b8c3;
  transform-origin: 0 0;
  transform: scaleX(0);
}
.cbx:hover span:first-child {
  border-color: #3c53c7;
}

.inp-cbx:checked + .cbx span:first-child {
  border-color: #3c53c7;
  background: #3c53c7;
  animation: check 0.6s ease;
}
.inp-cbx:checked + .cbx span:first-child svg {
  stroke-dashoffset: 0;
}
.inp-cbx:checked + .cbx span:first-child:before {
  transform: scale(2.2);
  opacity: 0;
  transition: all 0.6s ease;
}
.inp-cbx:checked + .cbx .label {
  color: #b9b8c3;
  transition: all 0.3s ease;
}
.inp-cbx:checked + .cbx .label:after {
  transform: scaleX(1);
  transition: all 0.3s ease;
}

@keyframes check {
  50% {
    transform: scale(1.2);
  }
}
</style>
