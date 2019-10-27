<template>
  <div id="sose" class="app" :class="[controlView, viewportView]" :style="sliderBgColor">
    <app-debug></app-debug>
    <app-header></app-header>
    <app-player></app-player>
    <router-view></router-view>
    <app-footer></app-footer>
    <app-cookie theme="dark-lime--rounded">
      <div slot="message">
        This website uses cookies to ensure you get the best experience. <router-link to="legal">More info here</router-link>.
      </div>
    </app-cookie>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Debug from '@/views/Debug.vue'
import Header from '@/views/Header.vue'
import Player from '@/views/Player.vue'
import Footer from '@/views/Footer.vue'
import Cookie from 'vue-cookie-law'

export default {
  components: {
    appDebug: Debug,
    appHeader: Header,
    appPlayer: Player,
    appFooter: Footer,
    appCookie: Cookie
  },
  computed: mapGetters(['controlView', 'viewportView', 'sliderBgColor']),
  methods: mapActions(['applyDebugMode']),
  created () {
    this.applyDebugMode(true)
  }
}
</script>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
    color: $text-color;
    font-size: 16px;
    font-family: $font-family-sans-serif;
    font-weight: normal;
    font-weight: 500;
    background-color: $lightblack;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
    a {
      color: $primary;
      text-decoration: none;
    }
    .app {
      display: block;
      overflow: hidden;
      // transition
      transition: background-color 1000ms ease-in-out 0s;
    }
}
</style>
