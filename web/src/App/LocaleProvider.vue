<script>
import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "../locales";
import { mapGetters } from "vuex";

const i18n = new VueI18n({
  locale: "en", // set locale
  fallbackLocale: process.env.LOCALE_FALLBACK || "en",
  messages // set locale messages
});
console.log("i18n", i18n);

const { currentLocale } = mapGetters(["currentLocale"]);

export default {
  mounted() {
    i18n.locale = currentLocale;
  },
  provide() {
    return { i18n };
  },
  render() {
    return this.$slots.default;
  }
};
</script>
