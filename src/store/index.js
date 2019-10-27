import Vue from 'vue'
import Vuex from 'vuex'

import control from './modules/control'
import player from './modules/player'
import home from './modules/home'
import sound from './modules/sound'
import video from './modules/video'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    control,
    player,
    home,
    sound,
    video
  }
})
