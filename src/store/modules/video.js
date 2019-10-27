import axios from 'axios'

const state = {
  video: {
    viewmode: '',
    tracklist: [],
    tracklistID: null,
    tracklistTrack: ''
  }
}

const getters = {
  videoViewMode: (state) => {
    return state.video.viewmode
  },
  allVideolist: (state) => {
    return state.video.tracklist.filter(item => item.id > 0)
  },
  activeVideolist: (state) => {
    const selected = state.video.tracklist.find(item => item.track === state.video.tracklistTrack)
    if (selected !== undefined) {
      return selected
    } else {
      return state.video.tracklist[0]
    }
  },
  activeVideoId: (state) => {
    return state.video.tracklistID
  },
  activeVideoTrack: (state) => {
    return state.video.tracklistTrack
  },
  nextVideoTrack: (state) => {
    let maxItems = state.video.tracklist.length
    let oldIndex = state.video.tracklist.map(function (item) { return item.track }).indexOf(state.video.tracklistTrack)
    let newIndex = oldIndex + 1
    if (newIndex < maxItems) {
      return state.video.tracklist[newIndex]
    } else {
      return state.video.tracklist[0]
    }
  }
}

const actions = {
  fetchVideolist ({ commit }, params) {
    commit('setVideoViewMode', 'waiting')

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
          commit('setVideoViewMode', 'success')
          commit('setVideoTracklistResults', { results })
          commit('setVideoTracklistParams', { params })
        } else {
          commit('setVideoViewMode', 'error')
        }
      })
      .catch(error => {
        commit('setVideoViewMode', 'error')
        console.log(error)
      })
  },
  applyActiveTracklistParams: ({ commit }, payload) => {
    commit('setVideoTracklistParams', payload)
  }
}

const mutations = {
  setVideoViewMode: (state, mode) => {
    if (state.video.viewmode !== mode) {
      state.video.viewmode = mode
    }
  },
  setVideoTracklistResults: (state, payload) => {
    state.video.tracklist = payload.results
  },
  setVideoTracklistParams: (state, payload) => {
    const selected = state.video.tracklist.find(item => item.track === payload.params.track)
    if (selected !== undefined) {
      state.video.tracklistID = selected.id
      state.video.tracklistTrack = selected.track
    } else {
      state.video.tracklistID = state.video.tracklist[0].id
      state.video.tracklistTrack = state.video.tracklist[0].track
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
