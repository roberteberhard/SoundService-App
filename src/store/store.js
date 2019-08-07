import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import navbar from './modules/navbar'
import player from './modules/player'
import playlists from './modules/playlists'
import videos from './modules/videos'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // set states which doesn't belogns to modules
  },
  actions,
  mutations,
  getters,
  modules: {
    navbar,
    player,
    playlists,
    videos
  }
})
