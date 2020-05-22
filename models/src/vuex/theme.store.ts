import { ActionContext } from "vuex";
import { RootState } from ".";

export interface ThemeState {
  currentTheme: string;
  isDark: boolean;
}

const state: ThemeState = {
  currentTheme: "default",
  isDark: false
};

const getters = {
  currentTheme: (state: ThemeState) => state.currentTheme,
  isThemeDark: (state: ThemeState) => state.isDark
};

const actions = {
  async setTheme(
    { commit }: ActionContext<ThemeState, RootState>,
    theme: string
  ) {
    commit("setTheme", theme);
  },
  async setIsThemeDark(
    { commit }: ActionContext<ThemeState, RootState>,
    isDark: boolean
  ) {
    commit("setIsThemeDark", isDark);
  }
};

const mutations = {
  setTheme(state: ThemeState, theme: string) {
    state.currentTheme = theme;
    return state;
  },
  setIsThemeDark(state: ThemeState, isDark: boolean) {
    state.isDark = isDark;
    return state;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
