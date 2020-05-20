import Vue from "vue";
import App from "./App";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import components from "../../components/web/_global";
import { i18n } from "./locales/i18n";

Vue.config.productionTip = false;

Object.keys(components).forEach(compName => {
  Vue.component(compName, components[compName]);
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
