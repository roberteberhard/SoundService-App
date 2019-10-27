<template>
  <div>

    fsdfsf
    <article v-if="isDebugMode" id="control">





      <



    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Debug',
  computed: {
    ...mapGetters(['isDebugMode', 'controlView', 'sliderBgColor', 'isPlayerActive', 'isPlayerPlaying', 'startPlaylistTrack', 'activPlaylistUser', 'activPlaylistSlug', 'activeVideoTrack', 'nextVideoTrack']),
    nextVideoToPlay: () => {
      return this.nextVideoTrack.track
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  background-color: aqua;
  padding: 20px;
}
#control {
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 1999;
  min-width: 200px;
  min-height: 180px;
  padding: 0px 8px 10px 8px;
  border-radius: 3px;
  p {
    font-size: 10px;
    color: white(1);
    &.ct {
      padding-top: 8px;
      padding-bottom: 2 px;
    }
  }
  background-color: black(0.75);
}
</style>
