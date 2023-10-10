const state = {
  data: {
    loading: false,
    formData: {
      judul: null,
    },
    columns: [],
    items: [
      {
        judul: "Baca Buku",
        isCompleted: false,
        isArchive: false,
      },
      {
        judul: "Baca Novel",
        isCompleted: false,
        isArchive: false,
      },
      {
        judul: "Baca Al-Qur'an",
        isCompleted: false,
        isArchive: false,
      },
    ],
  }
};

const mutations = {
  changeTodo(state, payload) {
    state.data = Object.assign({}, state.data, payload);
  }
};

const actions = {
  ADD_TODO({commit, state}) {
    commit("changeTodo", {
      loading: true
    })
    const dataItems = state.data.items;
    const judulBaru = state.data.formData.judul;
    dataItems.push({
      judul: judulBaru,
      isCompleted: false,
      isArchive: false,
    })
    setTimeout(() => {
      commit("changeTodo", {
        loading: false
      })
    },2000)
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
