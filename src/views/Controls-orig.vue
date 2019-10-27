<template>
  <section v-if="isPlayerActive" id="controls">
    <div class="remote-control">
      <button v-if="!isPlayerPlaying" class="play" @click="onPlayClick">Play</button>
      <button v-if="isPlayerPlaying" class="pause" @click="onPauseClick">Pause</button>
      <button class="next" @click="onNextClick">Next</button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Controls-old',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['applyPlayerPlayMode', 'applyPlayerPauseMode']),
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
    }
  },
  computed: mapGetters(['isPlayerActive', 'isPlayerPlaying', 'nextVideoList'])
}
</script>

<style lang="scss" scoped>
#controls {
  position: relative;
  height: 0;
  .remote-control {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 55;
    top: calc(100vh - 68px);
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
