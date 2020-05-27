import Vue from "vue";
import App from "./App";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import components from "@components/web/_global";
import directives from "./directives";
import { i18n } from "./locales/i18n";
import { Plugin as FragmentPlugin } from "vue-fragment";
import resizeDirective from "vue-resize-directive";

// set vue configs
Vue.config.productionTip = false;

// Add directives
Vue.directive("resize", resizeDirective);
Object.keys(directives).forEach(directiveName => {
  Vue.directive(directiveName, directives[directiveName]);
});

// Add components
Vue.use(FragmentPlugin);
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
