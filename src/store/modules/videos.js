import axios from 'axios'

/**
 * State
 */
const state = {
  tracks: [],
  loadingState: '', // 'waiting', 'error' & 'success'
  trackID: 0
}

/**
 * Getters
 */
const getters = {
  getLoadingState (state) {
    return state.loadingState
  },
  getVideoTracks (state) {
    return state.tracks.filter(item => item.id > 0)
  },
  getSelectedVideoTrack (state) {
    const selected = state.tracks.find(item => item.id === state.trackID)
    if (selected !== undefined) {
      return selected
    } else {
      return null
    }
  },
  getNextVideoParams (state) {
    let maxItems = state.tracks.length
    let oldIndex = state.tracks.map(function (video) { return video.id }).indexOf(state.trackID)
    let newIndex = oldIndex + 1
    if (newIndex < maxItems) {
      return state.tracks[newIndex]
    } else {
      return state.tracks[0]
    }
  }
}

/**
 * Mutations
 */
const mutations = {
  setLoadingState (state, mode) {
    state.loadingState = mode
  },
  setPlaylistsVideoTracks (state, data) {
    state.tracks = data.results
    const selected = state.tracks.find(item => item.track === data.params.track)
    state.trackID = selected.id
    console.log('store: videos', state.trackID)
  },
  setSelectedVideoTrack (state, params) {
    const selected = state.tracks.find(item => item.track === params.track)
    state.trackID = selected.id
    console.log('store: videos: selected:', state.trackID)
  }
}

/**
 * Actions
 */
const actions = {
  fetchPlaylistVideoTracks ({ commit }, params) {
    commit('setLoadingState', 'waiting')
    axios.get('/playlist/' + params.playlist)
      .then(response => {
        const data = response.data
        if (data.length > 0) {
          const results = []
          for (let key in data) {
            results.push({
              id: data[key].id,
              artist: data[key].artist,
              title: data[key].title,
              track: data[key].track,
              thumb: data[key].thumb,
              video: data[key].video,
              apple: data[key].apple,
              google: data[key].google,
              amazon: data[key].amazon,
              spotify: data[key].spotify,
              youtube: data[key].youtube,
              user: params.user,
              playlist: params.playlist
            })
          }
          commit('setLoadingState', 'success')
          commit('setPlaylistsVideoTracks', { results, params })
        } else {
          commit('setLoadingState', 'error')
        }
      })
      .catch(error => {
        console.log(error)
        commit('setLoadingState', 'error')
      })
  },
  updateVideoTracks ({ commit }, params) {
    commit('setSelectedVideoTrack', params)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
