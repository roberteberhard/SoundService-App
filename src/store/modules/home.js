import axios from 'axios'

const state = {
  home: {
    viewmode: '',
    playlist: [],
    playlistId: null,
    playlistTrack: ''
  }
}

const getters = {
  homeViewMode: (state) => {
    return state.home.viewmode
  },
  allHomePlaylist: (state) => {
    return state.home.playlist.filter(list => list.id > 0)
  },
  startPlaylist: (state) => {
    return state.home.playlist[0]
  },
  startPlaylistId: (state) => {
    return state.home.playlistId
  },
  startPlaylistTrack: (state) => {
    return state.home.playlistTrack
  }
}

const actions = {
  fetchHomePlaylist ({ commit }) {
    commit('setHomeViewMode', 'waiting')

    axios.get('playlists')
      .then(response => {
        const data = response.data
        if (data.length > 0) {
          const results = []
          for (let key in data) {
            results.push(data[key])
          }
          commit('setHomeViewMode', 'success')
          commit('setHomePlaylistResults', results)
          commit('setHomePlaylistTrack')
        } else {
          commit('setHomeViewMode', 'error')
        }
      })
      .catch(error => {
        commit('setHomeViewMode', 'error')
        console.log(error)
      })
  }
}

const mutations = {
  setHomeViewMode: (state, mode) => {
    if (state.home.viewmode !== mode) {
      state.home.viewmode = mode
    }
  },
  setHomePlaylistResults: (state, results) => {
    state.home.playlist = results
  },
  setHomePlaylistTrack: (state) => {
    state.home.playlistId = state.home.playlist[0].id
    state.home.playlistTrack = state.home.playlist[0].track
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
