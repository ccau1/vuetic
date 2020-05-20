<template>
  <div>
    <div
      class="list-item"
      :class="{ selected: currentLocale() === locale }"
      v-for="locale of availableLocales"
      :key="locale"
      @click="_setLocale(locale)"
    >
      <span>{{ locale }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      ...mapGetters(["currentLocale"]),
      availableLocales: process.env.VUE_APP_LOCALE_SUPPORTED.split(",")
    };
  },
  methods: {
    ...mapActions(["setLocale"]),
    _setLocale(locale) {
      this.$i18n.locale = locale;
      this.setLocale(locale);
    }
  }
};
</script>

<style lang="scss" scoped>
.list-item {
  padding: 10px 0;
  cursor: pointer;

  &.selected {
    background-color: blue;
  }
}
</style>
