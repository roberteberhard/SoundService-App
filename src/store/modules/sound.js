import axios from 'axios'

const state = {
  sound: {
    viewmode: '',
    playlist: [],
    playlistID: null,
    playlistUser: '',
    playlistSlug: ''
  }
}

const getters = {
  soundViewMode: (state) => {
    return state.sound.viewmode
  },
  allPlaylist: (state) => {
    return state.sound.playlist.filter(item => item.id > 0)
  },
  activePlaylist: (state) => {
    const selected = state.sound.playlist.find(item => item.id === state.sound.playlistID)
    if (selected !== undefined) {
      return selected
    } else {
      return state.sound.playlist[0]
    }
  },
  activePlaylistID: (state) => {
    return state.sound.playlistID
  },
  activePlaylistUser: (state) => {
    return state.sound.playlistUser
  },
  activePlaylistSlug: (state) => {
    return state.sound.playlistSlug
  }
}

const actions = {
  fetchPlaylist ({ commit }, params) {
    commit('setSoundViewMode', 'waiting')

    axios.get('/user/' + params.user)
      .then(response => {
        const data = response.data
        if (data.length > 0) {
          const results = []
          for (let key in data) {
            results.push(data[key])
          }
          commit('setSoundViewMode', 'success')
          commit('setSoundPlaylistResults', { results })
          commit('setSoundPlaylistParams', { params })
        } else {
          commit('setSoundViewMode', 'error')
        }
      })
      .catch(error => {
        commit('setSoundViewMode', 'error')
        console.log(error)
      })
  },
  applyActivePlaylistParams: ({ commit }, payload) => {
    commit('setSoundPlaylistParams', payload)
  }
}

const mutations = {
  setSoundViewMode: (state, mode) => {
    if (state.sound.viewmode !== mode) {
      state.sound.viewmode = mode
    }
  },
  setSoundPlaylistResults: (state, payload) => {
    state.sound.playlist = payload.results
  },
  setSoundPlaylistParams: (state, payload) => {
    const selected = state.sound.playlist.find(item => item.slug === payload.params.playlist)
    state.sound.playlistID = selected.id
    state.sound.playlistUser = selected.user
    state.sound.playlistSlug = selected.slug
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
