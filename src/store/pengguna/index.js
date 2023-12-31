const state = {
  data: {
    loading: false,
    items: [],
    columns: [],
  }
};

const mutations = {
  changePengguna(state, payload) {
    state.data = Object.assign({}, state.data, payload);
  }
};

const actions = {}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
