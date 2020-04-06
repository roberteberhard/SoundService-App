<template>
  <article class="video-cover" :class="[{'active': isActive}, {'playing': isPlaying}]">
    <a @click="onVideoTrackselected( { user: video.user, playlist: video.playlist, track: video.track } )" class="video-link">
      <div class="video-ctrl"></div>
      <div class="video-eqlizr">
        <span class="bar bar-1"></span>
        <span class="bar bar-2"></span>
        <span class="bar bar-3"></span>
      </div>
      <div class="video-desc">
        <h2 class="video-desc--title">{{ video.title }}</h2>
        <p class="video-desc--artist">{{ video.artist }}</p>
      </div>
      <img :src="`${video.thumb}`" :alt="video.title">
    </a>
  </article>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'VideolistCover',
  props: ['video', 'id', 'mode'],
  methods: {
    ...mapActions(['applyActiveTracklistParams', 'applyPlayerToggleMode']),
    onVideoTrackselected: function (params) {
      if (this.$route.params.track !== params.track) {
        this.applyActiveTracklistParams({ params: params })
        this.$router.push({ name: 'Sound', params: { user: params.user, playlist: params.playlist, track: params.track } })
      } else {
        this.applyPlayerToggleMode()
      }
    }
  },
  computed: {
    isActive: function () {
      if (this.video.id === this.id) {
        return true
      }
      return false
    },
    isPlaying: function () {
      if (this.mode === true) {
        if (this.video.id === this.id) {
          return true
        }
        return false
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.video-cover {
  position: relative;
  overflow: hidden;
  float: left;
  margin: 8px 8px;
  width: calc(50% - 16px);
  box-shadow: 0px 2px 3px rgba(0,0,0,0.5);
  background-color: black(0.1);
  @media only screen and (min-width: $viewport-4) {
    margin: 8px 8px;
    width: calc(50% - 16px);
  }
  @media only screen and (min-width: $viewport-7) {
      margin: 12px 12px;
      width: calc(50% - 24px);
  }
  @media only screen and (min-width: $viewport-9) {
      width: calc(33.333333% - 24px);
  }
  @media only screen and (min-width: $viewport-12) {
    width: calc(25% - 24px);
  }
  @media only screen and (min-width: $viewport-15) {
      width: calc(20% - 24px);
  }
  // Active
  &.active {
    .video-link {
      .video-ctrl {
        opacity: 1;
        border: solid 2px $primary;
        background-color: rgba(0,0,0,0.32);
        transition: all 350ms ease;
        &:after {
          background-image: $sose-icon-play-green;
        }
      }
    }
  }
  // Playing
  &.playing {
    .video-link {
      .video-ctrl {
        border: solid 2px $primary;
        &:after {
          opacity: 0;
        }
      }
      .video-eqlizr {
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
  .video-link {
    display: block;
    cursor: pointer;
    /**
     * Description
     */
    .video-ctrl {
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
        background-image: $sose-icon-play-white;
        transition: opacity 350ms ease;
        @media only screen and (min-width: $viewport-4) {
          background-size: 42px 42px;
        }
      }
    }
    .video-eqlizr {
      opacity: 0;
      transition: opacity .5s ease;
    }
    /**
     * Description
     */
    .video-desc {
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 12px;
      .video-desc--title {
        font-size: 14px;
        font-family: $font-family-sans-serif;
        font-weight: 700;
        letter-spacing: 0;
        @media only screen and (min-width: $viewport-4) {
          font-size: 16px;
        }
      }
      .video-desc--artist {
        color: $white;
        font-size: 11px;
        @media only screen and (min-width: $viewport-4) {
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
      .video-ctrl {
        opacity: 1;
      }
    }
  }
}
</style>
