import { ActionContext } from "vuex";
import { RootState } from ".";
import { getUserToken } from "../apis/authApi";

export interface LayoutState {
  isSideBarOpen: boolean;
}

const state: LayoutState = {
  isSideBarOpen: false
};

const getters = {
  isSideBarOpen: (state: LayoutState) => state.isSideBarOpen
};

const actions = {
  async setIsSideBarOpen(
    { commit }: ActionContext<LayoutState, RootState>,
    isOpen: boolean
  ) {
    commit("setIsSideBarOpen", isOpen);
  }
};

const mutations = {
  setIsSideBarOpen: (state: LayoutState, isOpen: boolean) =>
    (state.isSideBarOpen = isOpen)
};

export default {
  state,
  getters,
  actions,
  mutations
};
