import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from ".";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: process.env.VUE_APP_LOCALE || "en", // set locale
  fallbackLocale: process.env.VUE_APP_LOCALE_FALLBACK || "en",
  messages // set locale messages
});
