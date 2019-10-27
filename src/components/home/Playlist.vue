<template>
  <section class="home-playlist">
    <header class="playlist-header row">
      <div class="playlist-header__icon i-bus">Beach Bus</div>
      <h3 class="playlist-header__title">Beach Summer Playlists</h3>
    </header>
    <NetworkSpinner v-if="homeViewMode===waiting"/>
    <NetworkError v-else-if="homeViewMode===error" />
    <div v-else-if="homeViewMode===success" class="playlist-covers" >
      <PlaylistCover v-for="playlist in allHomePlaylist" :key="playlist.id" :playlist="playlist" :id="activePlaylistID"></PlaylistCover>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import NetworkSpinner from '@/components/asset/NetworkSpinner.vue'
import NetworkError from '@/components/asset/NetworkError.vue'
import PlaylistCover from '@/components/sound/PlaylistCover.vue'

export default {
  name: 'Playlist',
  data () {
    return {
      waiting: 'waiting',
      error: 'error',
      success: 'success'
    }
  },
  components: {
    NetworkSpinner,
    NetworkError,
    PlaylistCover
  },
  computed: mapGetters(['homeViewMode', 'allHomePlaylist', 'activePlaylistID']),
  methods: mapActions(['fetchHomePlaylist']),
  created () {
    if (!this.allHomePlaylist.length > 0) {
      this.fetchHomePlaylist()
    } else {
      this.fetchHomePlaylist()
      /**
       * FIXME: // -> Change to somethin else
       */
    }
  }
}
</script>

<style scoped lang="scss">
.home-playlist {
  display: block;
  overflow: hidden;
  padding-bottom: 50px;
  background-color: $ghost;
  @media only screen and (min-width: $viewport-4) {
    width: calc(100% - 24px);
    margin: 0 12px;
  }
  .playlist-header {
    &.row {
      height: 108px;
      .playlist-header__icon {
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
        height: 88px;
        width: 88px;
        font-size: 0;
        color: transparent;
        &::before {
          width: 88px;
          height: 88px;
        }
      }
      .playlist-header__title {
        color: $darkgrey ;
        font-family: $font-family-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 1.35;
        text-align: center;
        padding-top: 74px;
      }
    }
  }
  .playlist-covers {
    overflow: hidden;
    padding: 0 8px;
    @media only screen and (min-width: $viewport-7) {
      padding: 0 22px;
    }
    @media only screen and (min-width: $viewport-9) {
      padding: 0 22px;
    }
    @media only screen and (min-width: $viewport-12) {
      padding: 0 32px;
    }
    @media only screen and (min-width: $viewport-15) {
      padding: 0 62px;
    }
  }
}
</style>
