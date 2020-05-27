import { ActionContext } from "vuex";
import { RootState } from ".";
import { getUserToken } from "../apis/authApi";

export interface AuthState {
  isLoggedIn: boolean;
}

const state: AuthState = {
  isLoggedIn: false
};

const getters = {};

const actions = {
  async login(
    { commit }: ActionContext<AuthState, RootState>,
    payload: { input: string; password: string }
  ) {
    console.log("login action", payload);

    const userToken = await getUserToken(payload.input, payload.password);
    console.log("userToken", userToken);

    commit("setIsLoggedIn", true);
  }
};

const mutations = {
  setIsLoggedIn: (state: AuthState, isLoggedIn: boolean) =>
    (state.isLoggedIn = isLoggedIn)
};

export default {
  state,
  getters,
  actions,
  mutations
};
