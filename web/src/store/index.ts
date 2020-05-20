import Vue from "vue";
import Vuex from "vuex";

import modules from "../../../models/src/vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules
});
