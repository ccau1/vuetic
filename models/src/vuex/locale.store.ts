import { ActionContext } from "vuex";
import { RootState } from ".";

export interface LocaleState {
  currentLocale: string;
}

const state: LocaleState = {
  currentLocale: "en"
};

const getters = {
  currentLocale: (state: LocaleState) => state.currentLocale
};

const actions = {
  async setLocale(
    { commit }: ActionContext<LocaleState, RootState>,
    payload: { locale: string }
  ) {
    commit("setLocale", payload);
  }
};

const mutations = {
  setLocale: (state: LocaleState, payload: { locale: string }) =>
    (state.currentLocale = payload.locale)
};

export default {
  state,
  getters,
  actions,
  mutations
};
