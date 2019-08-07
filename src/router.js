import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/views/Dashboard.vue'
import VideoPage from '@/views/VideoPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    { path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    { path: '/:user/:playlist/:track',
      name: 'VideoPage',
      component: VideoPage
    }
  ],

  /**
   * Manage Scrolling Behaviour
   */
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
