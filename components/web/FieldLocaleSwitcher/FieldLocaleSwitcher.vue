<template>
  <div class="field-locale-switcher">
    <div v-if="position === 'top'">
      <Button
        size="sm"
        class="localeButton"
        :rounded="true"
        v-for="locale in locales"
        :key="locale.value"
        :class="{ selected: selected === locale.value }"
        @click="onLocaleClick(locale.value)"
        :status="setSelectedButtonColor(locale.value)"
        >{{ locale.name }}</Button
      >
    </div>
    <div class="text-input-area">
      <slot :selectedLocale="selected" />
    </div>
    <div v-if="position === 'bottom'">
      <Button
        size="sm"
        class="localeButton"
        :rounded="true"
        v-for="locale in locales"
        :key="locale.value"
        :class="{ selected: selected === locale.value }"
        @click="onLocaleClick(locale.value)"
        :status="setSelectedButtonColor(locale.value)"
        >{{ locale.name }}</Button
      >
    </div>
  </div>
</template>

<script>
import Button from "../Button/Button.vue";
export default {
  props: {
    locales: {
      type: Array
    },
    position: {
      type: String,
      required: true,
      validator: val => ["top", "bottom"].includes(val)
    },
    change: Function
  },
  components: { Button },
  inject: ["theme"],
  data() {
    return {
      selected: this.locales.length ? this.locales[0].value : ""
    };
  },
  methods: {
    onLocaleClick(localeVal) {
      this.selected = localeVal;
      this.$emit("change", localeVal);
    },
    setSelectedButtonColor(localeVal) {
      if (this.selected === localeVal) return "primary";
      if (this.selected !== localeVal) return "default";
    }
  }
};
</script>

<style lang="scss" scoped>
.localeButton {
  margin: 5px 5px 5px 0px;
}
</style>
