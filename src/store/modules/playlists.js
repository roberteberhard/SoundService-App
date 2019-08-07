import axios from 'axios'

/**
 * State
 */
const state = {
  items: [],
  loadingState: '', // 'waiting', 'error' & 'success'
  itemID: 0
}

/**
 * Getters
 */
const getters = {
  getHomePlaylists (state) {
    return state.items.filter(item => item.id > 0)
  },
  getUserPlaylists (state) {
    return state.items.filter(item => item.id > 0)
  },
  getLoadingState (state) {
    return state.loadingState
  },
  getSelectedUserPlaylist (state) {
    const selected = state.items.find(item => item.id === state.itemID)
    if (selected !== undefined) {
      return selected
    } else {
      return state.items[0]
    }
  }
}

/**
 * Mutations
 */
const mutations = {
  setPlaylistsHomeItems (state, results) {
    state.items = results
    console.log('store: playlist:')
  },
  setPlaylistsUserItems (state, data) {
    state.items = data.results
    const selected = state.items.find(item => item.slug === data.params.playlist)
    state.itemID = selected.id
    console.log('store: playlist:', state.itemID)
  },
  setLoadingState (state, mode) {
    state.loadingState = mode
  },
  setSelectedUserPlaylist (state, params) {
    const selected = state.items.find(item => item.slug === params.playlist)
    state.itemID = selected.id
    console.log('store: playlist: selected:', state.itemID)
  }
}

/**
 * Actions
 */
const actions = {
  fetchHomePlaylists ({ commit }) {
    commit('setLoadingState', 'waiting')
    axios.get('playlists')
      .then(response => {
        const data = response.data
        if (data.length > 0) {
          const results = []
          for (let key in data) {
            results.push(data[key])
          }
          commit('setLoadingState', 'success')
          commit('setPlaylistsHomeItems', results)
        } else {
          commit('setLoadingState', 'error')
        }
      })
      .catch(error => {
        console.log(error)
        commit('setLoadingState', 'error')
      })
  },
  fetchUserPlaylists ({ commit }, params) {
    commit('setLoadingState', 'waiting')
    axios.get('/user/' + params.user)
      .then(response => {
        const data = response.data
        if (data.length > 0) {
          const results = []
          for (let key in data) {
            results.push(data[key])
          }
          commit('setLoadingState', 'success')
          commit('setPlaylistsUserItems', { results, params })
        } else {
          commit('setLoadingState', 'error')
        }
      })
      .catch(error => {
        console.log(error)
        commit('setLoadingState', 'error')
      })
  },
  updateUserPlaylist ({ commit }, params) {
    commit('setSelectedUserPlaylist', params)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
