import * as types from './types';
import getters from './getters';
const state = {
  hideAside: false,
  asideWidth: '200px'
};

const mutations = {
  [types.HIDEASIDE] (state) {
    state.hideAside = !state.hideAside;
    if (state.hideAside) {
      state.asideWidth = '64px';
    } else {
      state.asideWidth = '200px';
    }
  }
};

export default {
  state,
  mutations,
  getters
};
