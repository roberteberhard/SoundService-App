const state = {
  menu: {
    viewState: false
  }
}

const getters = {
  viewState (state) {
    return state.menu.viewState
  }
}

const mutations = {
  setViewState (state, payload) {
    state.menu.viewState = payload
  }
}

const actions = {
  manageViewState ({ commit }, payload) {
    commit('setViewState', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
