<template>
  <div class="container">
    <div
      class="list-item"
      :class="{ selected: currentLocale === locale }"
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
      availableLocales: process.env.VUE_APP_LOCALE_SUPPORTED.split(",")
    };
  },
  computed: {
    ...mapGetters(["currentLocale"])
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
.container {
  display: flex;
  flex-direction: row;
  user-select: none;
  align-items: center;
}
.list-item {
  padding: 10px 10px;
  cursor: pointer;

  &.selected {
    background-color: rgba(255, 255, 255, 0.3);
  }
}
</style>
