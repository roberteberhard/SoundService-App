
const state = {
  player: {
    isActive: false,
    isPlaying: false
  }
}

const getters = {
  isPlayerActive: (state) => {
    return state.player.isActive
  },
  isPlayerPlaying: (state) => {
    return state.player.isPlaying
  }
}

const actions = {
  applyPlayerActiveMode: ({ commit }, mode) => {
    commit('setPlayerActiveMode', mode)
  },
  applyPlayerPlayMode: ({ commit }) => {
    commit('setPlayerPlayMode')
  },
  applyPlayerPauseMode: ({ commit }) => {
    commit('setPlayerPauseMode')
  },
  applyPlayerToggleMode: ({ commit }) => {
    commit('setPlayerToggleMode')
  }
}

const mutations = {
  setPlayerActiveMode (state, mode) {
    state.player.isActive = mode
  },
  setPlayerPlayMode: (state) => {
    state.player.isPlaying = true
  },
  setPlayerPauseMode: (state) => {
    state.player.isPlaying = false
  },
  setPlayerToggleMode: (state) => {
    state.player.isPlaying = !state.player.isPlaying
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
