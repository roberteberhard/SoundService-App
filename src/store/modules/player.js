const state = {
  controls: {
    viewState: false,
    playMode: false
  }
}

const getters = {
  viewState (state) {
    return state.controls.viewState
  },
  getPlayMode (state) {
    return state.controls.playMode
  }
}

const mutations = {
  setViewState (state, payload) {
    state.controls.viewState = payload
  },
  setPlayMode (state) {
    state.controls.playMode = true
  },
  setPauseMode (state) {
    state.controls.playMode = false
  },
  togglePlayMode (state) {
    state.controls.playMode = !state.controls.playMode
  }
}

/**
 * Actions
 */
const actions = {
  manageViewState ({ commit }, payload) {
    commit('setViewState', payload)
  },
  updatePlayMode ({ commit }) {
    commit('setPlayMode')
  },
  updatePauseMode ({ commit }) {
    commit('setPauseMode')
  },
  updateToggleMode ({ commit }) {
    commit('togglePlayMode')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
