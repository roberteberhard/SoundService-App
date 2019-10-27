
const state = {
  debugMode: false,
  controlView: '',
  viewportView: '',
  playerView: '',
  sliderColor: 'background-color: #424244'
}

const getters = {
  isDebugMode: (state) => {
    return state.debugMode
  },
  controlView: (state) => {
    return state.controlView
  },
  viewportView: (state) => {
    return state.viewportView
  },
  playerView: (state) => {
    return state.playerView
  },
  sliderBgColor: (state) => {
    return state.sliderColor
  }
}

const actions = {
  applyDebugMode: ({ commit }, mode) => {
    commit('setDebugMode', mode)
  },
  applyControlView: ({ commit }, name) => {
    commit('setControlView', name)
  },
  applyViewportView: ({ commit }, name) => {
    commit('setViewportView', name)
  },
  applySliderColor: ({ commit }, color) => {
    commit('setSliderColor', color)
  }
}

const mutations = {
  setDebugMode: (state, mode) => {
    state.debugMode = mode
  },
  setControlView: (state, name) => {
    state.controlView = name
    if (state.controlView === 'home') {
      state.playerView = 'player-home'
    } else if (state.controlView === 'sound') {
      state.playerView = 'player-sound'
    } else if (state.controlView === 'legal' || state.controlView === 'cookie' || state.controlView === 'privacy') {
      state.playerView = 'player-legal'
    }
  },
  setViewportView: (state, name) => {
    state.viewportView = name
  },
  setSliderColor: (state, color) => {
    state.sliderColor = color
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
