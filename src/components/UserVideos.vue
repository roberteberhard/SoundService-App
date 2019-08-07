<template>
  <section class="user-videos">

    <NetworkSpinner
      v-if="loading===waiting" />

    <NetworkError
      v-else-if="loading===error" />

    <div
      v-else-if="loading===success" class="videos-container" >

      <header class="videos-header">
        <div class="videos-header--icon i-videos"></div>
        <h3 class="videos-header--title">
          Track {{ this.indexPosition( videos, videoTrack.track ) }} of {{ videos.length }}<span class="title--arrow"> • </span>{{ videoTrack.artist }}<span class="title--arrow"> • </span>{{ videoTrack.title }}
        </h3>
      </header>

      <article v-for="track in videos" :key="track.id" class="video-track" :class="[ videoTrack.id===track.id ? 'active' : '', playMode ? 'is_playing' : '' ]">
        <a @click="onVideoTrackselected( { user: track.user, playlist: track.playlist, track: track.track } )" class="video-track-link">
          <div class="video-track-ctrl"></div>
          <div class="video-track-eqlizr">
            <span class="bar bar-1"></span>
            <span class="bar bar-2"></span>
            <span class="bar bar-3"></span>
          </div>
          <div class="video-track-desc">
            <h2 class="video-track-title">{{ track.title }}</h2>
            <p class="video-track-artist">{{ track.artist }}</p>
          </div>
          <img :src="track.thumb" :alt="track.title">
        </a>
      </article>

    </div>

  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import NetworkSpinner from '@/components/asset/NetworkSpinner.vue'
import NetworkError from '@/components/asset/NetworkError.vue'
export default {
  name: 'UserVideos',
  data () {
    return {
      waiting: 'waiting',
      error: 'error',
      success: 'success'
    }
  },
  components: {
    NetworkSpinner,
    NetworkError
  },
  methods: {
    indexPosition (videos, track) {
      for (let i = 0; i < videos.length; i++) {
        if (videos[i].track === track) {
          return i + 1
        }
      }
      return 0
    },
    onVideoTrackselected: function (params) {
      if (this.$route.params.track !== params.track) {
        this.$store.dispatch('videos/updateVideoTracks', params)
        this.$router.push({ name: 'VideoPage', params: { user: params.user, playlist: params.playlist, track: params.track } })
      } else {
        this.$store.dispatch('player/updateToggleMode')
      }
    }
  },
  computed: {
    ...mapGetters({
      loading: 'videos/getLoadingState',
      videos: 'videos/getVideoTracks',
      videoTrack: 'videos/getSelectedVideoTrack',
      playMode: 'player/getPlayMode'
    })
  },
  created () {
    this.$store.dispatch('videos/fetchPlaylistVideoTracks', this.$route.params)
  }
}
</script>

<style lang="scss" scoped>
.user-videos {
  background-color: $lightblack;
  .videos-container {
    @include clearfix();
    padding: 25px 8px 30px 8px;
    @media only screen and (min-width: $breakpoint-small) {
      padding: 25px 20px 40px 20px;
    }
    @media only screen and (min-width: $breakpoint-mobile) {
      padding: 25px 34px 50px 34px;
    }
    @media only screen and (min-width: $breakpoint-tablet) {
      padding: 30px 34px 60px 34px;
    }
    @media only screen and (min-width: $breakpoint-notebook) {
      padding: 35px 44px 60px 44px;
      padding-bottom: 60px;
    }
    @media only screen and (min-width: $breakpoint-desktop) {
        padding: 40px 74px 60px 74px;
    }
    .videos-header {
      padding: 0 12px 24px 12px;
      .videos-header--icon {
        text-align: center;
        padding: 5px 0;
        &.i-videos {
          opacity: 1;
        }
      }
      .videos-header--title {
        color: $white;
        font-family: $font-family-sans-serif;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 1px;
        text-align: center;
        text-transform: uppercase;
      }
    }
  }
}
.video-track {
  position: relative;
  overflow: hidden;
  float: left;
  margin: 8px 8px;
  width: calc(50% - 16px);
  box-shadow: 0px 2px 3px rgba(0,0,0,0.5);
  background-color: black(0.1);
  @media only screen and (min-width: $breakpoint-mobile) {
      margin: 12px 12px;
      width: calc(50% - 24px);
  }
  @media only screen and (min-width: $breakpoint-tablet) {
      width: calc(33.333333% - 24px);
  }
  @media only screen and (min-width: $breakpoint-notebook) {
    width: calc(25% - 24px);
  }
  @media only screen and (min-width: $breakpoint-desktop) {
      width: calc(20% - 24px);
  }
  .video-track-link {
    cursor: pointer;
    .video-track-ctrl {
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      border: solid 2px rgba(147,204,59,0);
      background-color: rgba(0,0,0,0.32);
      transition: all 350ms ease;
      .i-tracks {
        position: absolute;
        top: 12px;
        right: 12px;
        color: $white;
        font-size: 11px;
      }
      &:after {
        opacity: 1;
        content: "";
        width: 100%;
        height: 100%;
        display: inline-block;
        position: absolute;
        z-index: 2;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 32px 32px;
        background-image: $sose-icon-play;
        transition: opacity 350ms ease;
        @media only screen and (min-width: $breakpoint-small) {
          background-size: 42px 42px;
        }
      }
    }
    .video-track-eqlizr {
      opacity: 0;
      transition: opacity .5s ease;
    }
    .video-track-desc {
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 12px;
      .video-track-title {
        font-size: 14px;
        font-family: $font-family-sans-serif;
        font-weight: 700;
        letter-spacing: 0;
        @media only screen and (min-width: $breakpoint-small) {
          font-size: 16px;
        }
      }
      .video-track-artist {
        color: $white;
        font-size: 11px;
        @media only screen and (min-width: $breakpoint-small) {
          font-size: 13px;
        }
      }
    }
    img {
      display: block;
      width: auto;
      height: auto;
      max-width: 100%;
    }
    &:hover {
      .video-track-ctrl {
        opacity: 1;
      }
    }
  }
}
// active
.video-track.active {
  .video-track-link {
    .video-track-ctrl {
      opacity: 1;
      border: solid 2px $white;
      background-color: rgba(0,0,0,0.32);
      transition: all 350ms ease;
    }
  }
}
// playing
.video-track.active.is_playing {
  .video-track-link {
    .video-track-ctrl {
      border: solid 2px $primary;
      &:after {
        opacity: 0;
      }
    }
    .video-track-eqlizr {
      float: none;
      opacity: 1;
      position: absolute;
      top: 50%;
      left: 50%;
      height: 20px;
      width: 20px;
      transform: translate(-50%, -50%) scale(1);
      .bar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 25%;
        height: 0;
        background: $primary;
        transition: height 0.4s ease;
        animation: bar 0.4s 0s both alternate ease infinite;
        &.bar-1 {
          animation-delay: 0.2s;
        }
        &.bar-2 {
          left: 36%;
          animation-delay: 0.4s;
        }
        &.bar-3 {
          left: 72%;
          animation-delay: 0.6s;
        }
        @keyframes bar {
          0% {
            height: 5;
          }
          100% {
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
