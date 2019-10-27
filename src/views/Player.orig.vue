<template>
  <div id="player" v-if="isPlayerActive" :class="okidoki">
    <div v-if="activeVideolist" class="partner-links">
      <ul>
        <li v-if="activeVideolist.amazon" class="brand amazon"><a :href="activeVideolist.amazon" target="_blank">Amazon</a></li>
        <li v-if="activeVideolist.google" class="brand google"><a :href="activeVideolist.google" target="_blank">Google Play</a></li>
        <li v-if="activeVideolist.apple" class="brand apple"><a :href="activeVideolist.apple" target="_blank">Apple</a></li>
        <li v-if="activeVideolist.youtube" class="brand youtube"><a :href="activeVideolist.youtube" target="_blank">Youtube</a></li>
        <li v-if="activeVideolist.spotify" class="brand spotify"><a :href="activeVideolist.spotify" target="_blank">Spotify</a></li>
      </ul>
    </div>
    <div class="layer"></div>
    <div v-if="activeVideolist" id="videoPlayer" class="video-container"  :style="{ width: player.width + 'px', height: player.height + 'px', top: player.top + 'px', left: player.left + 'px' }" :scroll="handleScroll">
      <MyPlayer
        width="100%"
        height="100%"
        :ytid="activeVideolist.video"
        :playerVars="ready"
        ref="yt"
        @ready="onPlayerReady"
        @error="onPlayerError"
        @unstarted="onPlayerUnstarted"
        @playing="onPlayerPlaying"
        @paused="onPlayerPaused"
        @buffering="onPlayerBuffering"
        @ended="onPlayerEnd">
      </MyPlayer>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VuePlayerPlugin, { Player } from 'vue-youtube-iframe-api'
import { mapActions, mapGetters } from 'vuex'

Vue.use(VuePlayerPlugin)

export default {
  name: 'Player',
  data: function () {
    return {
      ready: {
        cc_load_policy: 1,
        controls: 0,
        // disablekb: 1,
        iv_load_policy: 3,
        autoplay: 1,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        start: 1,
        enablejsapi: 1,
        fs: 0,
        // hl: EN,
        loop: 0,
        origin: 'localhost:8080',
        playsinline: 1
      },
      window: {
        scrolled: false,
        width: 0,
        height: 0
      },
      player: {
        style: 'top', // top, bottom
        width: 1280,
        height: 720,
        top: 0,
        left: 0
      },
      scrolled: 0
    }
  },
  watch: {
    'isPlayerPlaying' (to, from) {
      if (to) {
        console.log('play')
        this.$refs.yt.player.playVideo()
      } else {
        console.log('pause')
        this.$refs.yt.player.pauseVideo()
      }
    }
  },
  components: {
    MyPlayer: Player
  },
  computed: {
    ...mapGetters(['isPlayerActive', 'isPlayerPlaying', 'activeVideolist', 'nextVideoTrack']),
    okidoki () {
      const style = this.$store.getters.appState
      if (style === 'home') {
        return 'miniplayer'
      }
      return 'default'
    }
  },
  methods: {
    ...mapActions(['applyPlayerPlayMode', 'applyPlayerPauseMode']),
    onPlayerReady () {
      this.$refs.yt.player.setVolume(100)
    },
    onPlayerError () {
      this.applyPlayerPauseMode()
    },
    onPlayerUnstarted () {
      this.applyPlayerPauseMode()
    },
    onPlayerPlaying () {
      this.applyPlayerPlayMode()
    },
    onPlayerPaused () {
      this.applyPlayerPauseMode()
    },
    onPlayerBuffering () {
      // console.log('buffering')
    },
    onPlayerEnd () {
      this.$router.push({ name: 'Sound', params: { user: this.nextVideoTrack.user, playlist: this.nextVideoTrack.playlist, track: this.nextVideoTrack.track } })
    },
    handleScroll () {
      // let windowHeight = window.innerHeight
      // let windowY = window.scrollY
      this.scrolled = window.scrollY > 0
    },
    handleResize () {
      let windowWidth = document.documentElement.clientWidth
      let windowHeight = document.documentElement.clientHeight
      let playerHeight = windowWidth * 0.5625
      if (playerHeight > windowHeight) {
        this.player.width = windowWidth
        this.player.height = playerHeight
        this.player.top = -Math.round((playerHeight - windowHeight) * 0.5)
        this.player.left = 0
      } else if (playerHeight < windowHeight) {
        this.player.width = Math.round(windowHeight * 1.77777778)
        this.player.height = windowHeight
        this.player.top = 0
        this.player.left = -Math.round((this.player.width - windowWidth) * 0.5)
      }
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
    this.handleResize()
  }
}
</script>

<style scoped lang="scss">
#player {
  overflow: hidden;
  position: absolute;
  z-index: 50;
  width: 100vw;
  height: 100vh;
  background-color: $black;
  &.miniplayer {
    opacity: 0.8;
    top: 600px;
    left: calc(50% - 178px);
    width: 356px;
    height: 200px;

    @media only screen and (min-width: $breakpoint-small) {
      top: 400px;
      left: calc(50% - 200px);
      width: 400px;
      height: 225px;
    }
    @media only screen and (min-width: $breakpoint-mobile) {
      top: 684px;
    }
    @media only screen and (min-width: $breakpoint-tablet) {
      top: 684px;
    }
    @media only screen and (min-width: $breakpoint-notebook) {
      top: 684px;
    }
    @media only screen and (min-width: $breakpoint-desktop) {
      top: 684px;
    }
  }
  .partner-links {
    right: 0;
    bottom: 52px;
    position: absolute;
    z-index: 1;
    @media only screen and (min-width: $breakpoint-small) {
      right: 0;
    }
    @media only screen and (min-width: $breakpoint-mobile) {
      right: 0;
    }
    @media only screen and (min-width: $breakpoint-tablet) {
      right: 0;
    }
    @media only screen and (min-width: $breakpoint-notebook) {
      right: 56px;
    }
    @media only screen and (min-width: $breakpoint-desktop) {
      right: 86px;
    }
    ul {
      list-style: none;
      li.brand {
        float: left;
        margin-left: 20px;
        a {
          cursor: pointer;
          display: block;
          width: 28px;
          height: 28px;
          font-size: 0;
          background-position: 0 0;
          background-repeat: no-repeat;
          background-size: 28px 28px;
        }
        &.youtube a {
          background-image: $brand-icon-youtube;
        }
        &.google a {
          background-image: $brand-icon-google-play;
        }
        &.amazon a {
          background-image: $brand-icon-amazon;
        }
        &.spotify a {
          width: 27px;
          height: 28px;
          background-size: 27px 27px;
          background-image: $brand-icon-spotify;
        }
        &.apple a {
          margin-top: -3px;
          background-image: $brand-icon-apple;
        }
      }
    }
  }
  .layer {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    background-color: white(0)
  }
  .video-container {
    position: relative;
    z-index: 0;
    pointer-events: none;
  }
}
</style>
