import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import './registerServiceWorker'

/**
 * Base URL for the soundservice API.
 */
axios.defaults.baseURL = 'https://cms.soundservice.com/api/sose/v1'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
