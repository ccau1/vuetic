import Vue from "vue";
import App from "./App";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import components from "@components/web/_global";
import { i18n } from "./locales/i18n";

// set vue configs
Vue.config.productionTip = false;

// Add components
Object.keys(components).forEach(compName => {
  Vue.component(compName, components[compName]);
});

// create new vue app, mounting to a html tag
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
