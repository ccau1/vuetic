import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

import modules from "@models/src/vuex";

const vuexPersist = new VuexPersist({
  key: `${process.env.VUE_APP_APP_NAME}-vuex`,
  storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  modules
});
