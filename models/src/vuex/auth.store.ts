import { ActionContext } from "vuex";
import { RootState } from ".";
import { getUserToken } from "../apis/authApi";

export interface AuthState {}

const state: AuthState = {};

const getters = {};

const actions = {
  async login(
    { commit }: ActionContext<AuthState, RootState>,
    payload: { input: string; password: string }
  ) {
    console.log("login action", payload);

    const userToken = await getUserToken(payload.input, payload.password);
    console.log("userToken", userToken);

    // commit("getUserToken", payload);
  }
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
