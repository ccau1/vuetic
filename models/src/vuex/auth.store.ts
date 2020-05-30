import { ActionContext } from "vuex";
import { RootState } from ".";
import { getUserToken } from "../apis/authApi";
import serverApi from "../apiClients/serverApi";
import { getCurrentUser } from "../apis/userApi";

export interface AuthState {
  isLoggedIn: boolean;
}

const state: AuthState = {
  isLoggedIn: false
};

const getters = {
  isLoggedIn: (state: AuthState) => state.isLoggedIn
};

const actions = {
  async login(
    { commit }: ActionContext<AuthState, RootState>,
    payload: { input: string; password: string }
  ) {
    // get user token from api
    const userToken = await getUserToken(payload.input, payload.password);
    // store user token into api's token manager so it'll be handled
    // in api header
    serverApi.getTokenManager()?.setToken(userToken);
    // get current user from api based on token
    const user = await getCurrentUser();
    // store current user and logged in status to vuex
    commit("setCurrentUser", user);
    commit("setIsLoggedIn", true);

    return user;
  },
  async logout({ commit }: ActionContext<AuthState, RootState>) {
    // remove token in api's token manager so api headers
    // won't have it anymore
    serverApi.getTokenManager()?.setToken(null);
    // update vuex current user and logged in status
    commit("setCurrentUser", null);
    commit("setIsLoggedIn", false);
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
