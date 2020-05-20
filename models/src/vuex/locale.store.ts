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
    locale: string
  ) {
    commit("setLocale", locale);
  }
};

const mutations = {
  setLocale(state: LocaleState, locale: string) {
    state.currentLocale = locale;
    return state;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
