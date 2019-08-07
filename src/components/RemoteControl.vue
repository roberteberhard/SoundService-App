<template>
  <div v-if="loading" class="remote-control">
    <div class="controls">
      <button v-if="!playMode" class="play" @click="onPlayClick">Play</button>
      <button v-if="playMode" class="pause" @click="onPauseClick">Pause</button>
      <button class="next" @click="onNextClick">Next</button>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  name: 'RemoteControl',
  data: function () {
    return {
      loading: true
    }
  },
  methods: {
    onPlayClick () {
      this.$store.dispatch('player/updatePlayMode')
    },
    onPauseClick () {
      this.$store.dispatch('player/updatePauseMode')
    },
    onNextClick () {
      this.$router.push({
        name: 'VideoPage',
        params: {
          user: this.nextVideo.user,
          playlist: this.nextVideo.playlist,
          track: this.nextVideo.track
        }
      })
    }
  },
  computed: {
    ...mapGetters({
      playMode: 'player/getPlayMode',
      nextVideo: 'videos/getNextVideoParams'
    })
  }
}
</script>

<style lang="scss" scoped>
.remote-control {
  position: relative;
  height: 0;
  .controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 99;
    bottom: 48px;
    left: 20px;
    font-size: 0;
    @media only screen and (min-width: $breakpoint-small) {
      left: 0;
    }
    @media only screen and (min-width: $breakpoint-mobile) {
      left: 0;
    }
    @media only screen and (min-width: $breakpoint-tablet) {
      left: 0;
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
      background-color: white(0.15);
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
      background-color: white(0.15);
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
      background-color: white(0.15);
      background-image: $player-icon-next;
    }
  }
}
</style>
