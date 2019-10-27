<template>
  <article v-if="isDebugMode" id="debug">
    <p><span class="sp40">Page</span>{{ controlView }}</p>
    <p><span class="sp40">View</span>{{ viewportView }}</p>
    <p><span class="sp40">Slider</span>{{ sliderBgColor }}</p>
    <p class="ds">Player:</p>
    <p><span class="sp40">Show</span>{{ isPlayerActive }}</p>
    <p><span class="sp40">Play</span>{{ isPlayerPlaying }}</p>
    <p><span class="sp40">View</span>{{ playerView }}</p>
    <p class="ds">Start:</p>
    <p><span class="sp40">Id</span>{{ startPlaylistId }}</p>
    <p><span class="sp40">Track</span>{{ startPlaylistTrack }}</p>
    <p class="ds">Playlist:</p>
    <p><span class="sp40">Id</span>{{ activePlaylistID }}</p>
    <p><span class="sp40">User</span>{{ activePlaylistUser }}</p>
    <p><span class="sp40">Slug</span>{{ activePlaylistSlug }}</p>
    <p>---</p>
    <p><span class="sp40">Id</span>{{ activeVideoId }}</p>
    <p><span class="sp40">Track</span>{{ activeVideoTrack }}</p>
    <p>---</p>
    <p><span class="sp40">Device</span>{{ activeDevice }}</p>
    <p>Screen:</p>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import { isMobile } from 'mobile-device-detect'

export default {
  name: 'Debug',
  data () {
    return {
      activeDevice: isMobile ? 'Mobile' : 'Browser'
    }
  },
  computed: mapGetters(['isDebugMode', 'controlView', 'viewportView', 'playerView', 'sliderBgColor', 'isPlayerActive', 'isPlayerPlaying', 'startPlaylistId', 'startPlaylistTrack', 'activePlaylistID', 'activePlaylistUser', 'activePlaylistSlug', 'activeVideoId', 'activeVideoTrack'])
}
</script>

<style lang="scss" scoped>
#debug {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1999;
  min-width: 180px;
  min-height: 180px;
  padding: 10px 8px;
  border-radius: 3px;
  p {
    font-size: 10px;
    line-height: 1.2;
    color: white(0.75);
    &.dt {
      color: white;
      font-weight: 700;
      font-size: 12px;
      padding-top: 8px;
      padding-bottom: 12px;
    }
    &.ds {
      color: white;
      font-weight: 700;
      padding-top: 10px;
      padding-bottom: 2px;
    }
    .sp40 {
      color: white;
      font-weight: 700;
      width: 40px;
      display: inline-block;
    }
  }
  background-color: rgba(20, 179, 179, 0.95);
}
</style>
