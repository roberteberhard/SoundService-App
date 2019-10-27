import Vue from 'vue'
import Router from 'vue-router'
import VueScrollTo from 'vue-scrollto'

import Home from '@/views/Home.vue'
import Sound from '@/views/Sound.vue'
import Cookie from '@/views/Cookie.vue'
import Privacy from '@/views/Privacy.vue'
import Legal from '@/views/Legal.vue'

Vue.use(Router)
Vue.use(VueScrollTo)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/:user/:playlist/:track', name: 'Sound', component: Sound },
    { path: '/cookie', name: 'Cookie', component: Cookie },
    { path: '/privacy', name: 'Privacy', component: Privacy },
    { path: '/legal', name: 'Legal', component: Legal },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior: (to, from) => {
    if (to.hash) {
      VueScrollTo.scrollTo(to.hash, 700)
      return {
        selector: to.hash,
        offset: { x: 0, y: 0 }
      }
    }
    return { x: 0, y: 0 }
  }
})
