import { ActionContext } from "vuex";
import { RootState } from ".";
import { User } from "@/typings";
// import { getUserToken } from "../apis/authApi";

export interface LayoutState {
  currentUser: User | null;
}

const state: LayoutState = {
  currentUser: null
};

const getters = {
  currentUser: (state: LayoutState) => state.currentUser
};

const actions = {
  async setCurrentUser(
    { commit }: ActionContext<LayoutState, RootState>,
    currentUser: User
  ) {
    commit("setCurrentUser", currentUser);
  }
};

const mutations = {
  setCurrentUser: (state: LayoutState, currentUser: User) =>
    (state.currentUser = currentUser)
};

export default {
  state,
  getters,
  actions,
  mutations
};
