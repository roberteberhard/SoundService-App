<template>
  <div id="player" v-if="isPlayerActive" :class="playerStyle">
    <div v-if="activeVideolist" class="remote-control">
      <button v-if="!isPlayerPlaying" class="play" @click="onPlayClick">Play</button>
      <button v-if="isPlayerPlaying" class="pause" @click="onPauseClick">Pause</button>
      <button class="next" @click="onNextClick">Next</button>
    </div>
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
      viewport: '',
      windowWidth: 0,
      windowHeight: 0,
      playerHeight: 0,
      scrolled: 0
    }
  },
  watch: {
  },
  components: {
    MyPlayer: Player
  },
  computed: {
    ...mapGetters(['playerView', 'isPlayerActive', 'isPlayerPlaying', 'activeVideolist', 'nextVideoTrack']),
    playerStyle () {
      this.handleResize()
      return this.playerView
    }
  },
  methods: {
    ...mapActions(['applyViewportView', 'applyPlayerView', 'applyPlayerPlayMode', 'applyPlayerPauseMode']),
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
    onPlayClick () {
      this.applyPlayerPlayMode()
    },
    onPauseClick () {
      this.applyPlayerPauseMode()
    },
    onNextClick () {
      this.$router.push({
        name: 'Sound',
        params: {
          user: this.nextVideoList.user,
          playlist: this.nextVideoList.playlist,
          track: this.nextVideoList.track
        }
      })
    },
    handleScroll () {
      // let windowHeight = window.innerHeight
      // let windowY = window.scrollY
      this.scrolled = window.scrollY > 0
    },
    handleResize () {
      this.windowWidth = document.documentElement.clientWidth
      this.windowHeight = document.documentElement.clientHeight
      this.playerHeight = this.windowWidth * 0.5625

      // Viewports
      if (this.windowWidth < 480) {
        this.viewport = ''
      } else if (this.windowWidth >= 480 && this.windowWidth < 768) {
        this.viewport = 'viewport-4'
      } else if (this.windowWidth >= 768 && this.windowWidth < 992) {
        this.viewport = 'viewport-7'
      } else if (this.windowWidth >= 992 && this.windowWidth < 1200) {
        this.viewport = 'viewport-9'
      } else if (this.windowWidth >= 1200 && this.windowWidth < 1520) {
        this.viewport = 'viewport-12'
      } else if (this.windowWidth >= 1520) {
        this.viewport = 'viewport-15'
      }
      this.applyViewportView(this.viewport)

      // Sound Player View
      if (this.playerHeight > this.windowHeight) {
        this.player.width = this.windowWidth
        this.player.height = this.playerHeight
        this.player.top = -Math.round((this.playerHeight - this.windowHeight) * 0.5)
        this.player.left = 0
      } else if (this.playerHeight < this.windowHeight) {
        this.player.width = Math.round(this.windowHeight * 1.77777778)
        this.player.height = this.windowHeight
        this.player.top = 0
        this.player.left = -Math.round((this.player.width - this.windowWidth) * 0.5)
      }
      // Home Player View
      if (this.playerView === 'player-home') {
        this.player.top = 0
        this.player.left = 0
        this.player.width = 320
        this.player.height = 180
        if (this.viewport === 'viewport-4') {
          this.player.width = 420
          this.player.height = 236
        } else if (this.viewport === 'viewport-7') {
          this.player.width = 420
          this.player.height = 236
        } else if (this.viewport === 'viewport-9') {
          this.player.width = 420
          this.player.height = 236
        } else if (this.viewport === 'viewport-12') {
          this.player.width = 420
          this.player.height = 236
        } else if (this.viewport === 'viewport-15') {
          this.player.width = 480
          this.player.height = 270
        }
      }
      // Legal Player View
      if (this.playerView === 'player-legal') {
        this.player.top = 0
        this.player.left = 0
        this.player.width = 320
        this.player.height = 180
        if (this.viewport === 'viewport-4') {
          this.player.width = 420
          this.player.height = 236
        } else if (this.viewport === 'viewport-7') {
          this.player.width = 420
          this.player.height = 236
        } else if (this.viewport === 'viewport-9') {
          this.player.width = 420
          this.player.height = 236
        } else if (this.viewport === 'viewport-12') {
          this.player.width = 420
          this.player.height = 236
        } else if (this.viewport === 'viewport-15') {
          this.player.width = 480
          this.player.height = 270
        }
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

  /** Player Home States */
  &.player-home {
    width: 320px;
    height: 180px;
    top: 595px;
    right: calc((100% - 320px) * 0.5);
    @media only screen and (min-width: $viewport-4) {
      width: 420px;
      height: 236px;
      top: 645px;
      right: calc((100% - 420px) * 0.5);
    }
    @media only screen and (min-width: $viewport-7) {
      width: 420px;
      height: 236px;
      top: 675px;
      right: calc((100% - 420px) * 0.5);
    }
    @media only screen and (min-width: $viewport-9) {
      width: 420px;
      height: 236px;
      top: 585px;
      right: 46px;
    }
    @media only screen and (min-width: $viewport-12) {
      width: 420px;
      height: 236px;
      top: 565px;
      right: 56px;
    }
    @media only screen and (min-width: $viewport-15) {
      width: 480px;
      height: 270px;
      top: 685px;
      right: 86px;
    }
    // Remote Control
    .remote-control {
      top: 126px;
      left: 20px;
      @media only screen and (min-width: $viewport-4) {
        top: 182px;
        left: 20px;
      }
      @media only screen and (min-width: $viewport-15) {
        top: 216px;
        left: 20px;
      }
    }
    // Partner Links
    .partner-links  {
      top: 130px;
      right: 22px;
      @media only screen and (min-width: $viewport-4) {
        top: 186px;
        right: 20px;
      }
      @media only screen and (min-width: $viewport-15) {
        top: 220px;
        right: 20px;
      }
    }
  }
  /** Player Legal States */
  &.player-legal {
    width: 320px;
    height: 180px;
    bottom: 0;
    right: 0;
    @media only screen and (min-width: $viewport-4) {
      width: 420px;
      height: 236px;
    }
    @media only screen and (min-width: $viewport-7) {
      width: 420px;
      height: 236px;
    }
    @media only screen and (min-width: $viewport-9) {
      width: 420px;
      height: 236px;
    }
    @media only screen and (min-width: $viewport-12) {
      width: 420px;
      height: 236px;
    }
    @media only screen and (min-width: $viewport-15) {
      width: 480px;
      height: 270px;
    }
    // Partner Links
    .partner-links  {
      top: 130px;
      right: 22px;
      @media only screen and (min-width: $viewport-4) {
        top: 186px;
        right: 20px;
      }
      @media only screen and (min-width: $viewport-15) {
        top: 220px;
        right: 20px;
      }
    }
  }
  /**
   * Remote Control
   */
  .remote-control {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 55;
    top: calc(100vh - 97px);
    left: 40px;
    font-size: 0;
    @media only screen and (min-width: $breakpoint-small) {
      left: 40px;
    }
    @media only screen and (min-width: $breakpoint-mobile) {
      left: 40px;
    }
    @media only screen and (min-width: $breakpoint-tablet) {
      left: 40px;
    }
    @media only screen and (min-width: $breakpoint-notebook) {
      left: 56px;
    }
    @media only screen and (min-width: $breakpoint-desktop) {
      left: 86px;
    }
    .play {
      cursor: pointer;
      display: block;
      width: 54px;
      height: 36px;
      outline: none !important;
      font-size: 0;
      border-radius: 18px;
      border: 0;
      background-position: 22px 12px;
      background-repeat: no-repeat;
      background-size: 12px 12px;
      background-color: white(0.35);
      background-image: $player-icon-play;
    }
    .pause {
      cursor: pointer;
      display: block;
      width: 54px;
      height: 36px;
      outline: none !important;
      font-size: 0;
      border-radius: 18px;
      border: 0;
      background-position: 22px 12px;
      background-repeat: no-repeat;
      background-size: 12px 12px;
      background-color: white(0.35);
      background-image: $player-icon-pause;
    }
    .next {
      cursor: pointer;
      display: block;
      width: 54px;
      height: 36px;
      margin-left: 8px;
      outline: none !important;
      font-size: 0;
      border-radius: 18px;
      border: 0;
      background-position: 18px 12px;
      background-repeat: no-repeat;
      background-size: 24px 12px;
      background-color: white(0.35);
      background-image: $player-icon-next;
    }
  }

  /**
   * Partner Links
   */
  .partner-links {
    display: none;
    right: 0;
    top: calc(100vh - 92px);
    position: absolute;
    z-index: 1;
    @media only screen and (min-width: $viewport-4) {
      display: block;
      right: 0;
    }
    @media only screen and (min-width: $viewport-7) {
      right: 0;
    }
    @media only screen and (min-width: $viewport-9) {
      right: 0;
    }
    @media only screen and (min-width: $viewport-12) {
      right: 56px;
    }
    @media only screen and (min-width: $viewport-15) {
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
