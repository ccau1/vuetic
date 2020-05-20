import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import components from "../../components/web/_global";

Vue.config.productionTip = false;

Object.keys(components).forEach(compName => {
  Vue.component(compName, components[compName]);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
