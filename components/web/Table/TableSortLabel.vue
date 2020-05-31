<template>
  <div class="table-sort-label" @click="_onClick">
    <FontAwesomeIcon
      v-if="!isRightSide"
      :class="{
        active,
        'direction-asc': direction === 'asc',
        'direction-desc': direction === 'desc'
      }"
      style="margin-right: 5px"
      class="sort-arrow"
      size="sm"
      icon="arrow-down"
    />
    <slot />
    <FontAwesomeIcon
      v-if="isRightSide"
      :class="{
        active,
        'direction-asc': direction === 'asc',
        'direction-desc': direction === 'desc'
      }"
      style="margin-left: 5px"
      class="sort-arrow"
      size="sm"
      icon="arrow-down"
    />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowDown);

export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      validator: val => ["asc", "desc"].includes(val)
    },
    onClick: {
      type: Function,
      default: () => null
    }
  },
  components: { FontAwesomeIcon },
  computed: {
    arrowIconStyle() {
      const style = {};

      return style;
    },
    isRightSide() {
      return this.$parent.align === "left";
    }
  },
  methods: {
    _onClick(ev) {
      this.$emit("onClick", ev);
    }
  }
};
</script>

<style lang="scss" scoped>
.table-sort-label {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  &:hover {
    cursor: pointer;
    opacity: 0.5;

    &:hover .sort-arrow:not(.active) {
      opacity: 0.5;
    }
  }

  & .sort-arrow {
    opacity: 0;

    transition: all 200ms;
  }
  & .sort-arrow.active {
    opacity: 1;
  }
  & .sort-arrow.direction-asc {
    transform: rotate(0deg);
  }
  & .sort-arrow.direction-desc {
    transform: rotate(180deg);
  }
}
</style>
