<template>
  <section class="sound-playlist">
    <NetworkSpinner v-if="soundViewMode===waiting" />
    <NetworkError v-else-if="soundViewMode===error" />
    <div v-else-if="soundViewMode===success" class="playlist-covers" >
      <header class="playlist-header">
        <div class="playlist-header__icon i-playlist"></div>
        <h3 class="playlist-header__title">
          {{ activePlaylist.user }}<span class="title--arrow"> • </span>{{ activePlaylist.title }}<span class="title--arrow"> • </span>{{ activePlaylist.tracks }} Tracks
        </h3>
      </header>
      <PlaylistCover v-for="playlist in allPlaylist" :key="playlist.id" :playlist="playlist" :id="activePlaylistID"></PlaylistCover>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import NetworkSpinner from '@/components/asset/NetworkSpinner.vue'
import NetworkError from '@/components/asset/NetworkError.vue'
import PlaylistCover from '@/components/sound/PlaylistCover.vue'

export default {
  name: 'PlayList',
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
  computed: mapGetters(['soundViewMode', 'allPlaylist', 'activePlaylist', 'activePlaylistSlug', 'activePlaylistID']),
  methods: mapActions(['fetchPlaylist', 'fetchVideolist', 'applyActivePlaylistParams', 'applyActiveTracklistParams']),
  created () {
    this.fetchPlaylist(this.$route.params)
  },
  watch: {
    '$route' (to, from) {
      if (this.activePlaylistSlug !== to.params.playlist) {
        this.fetchVideolist(to.params)
        this.applyActivePlaylistParams({ params: to.params })
      } else if (to.params !== from.params) {
        this.applyActiveTracklistParams({ params: to.params })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sound-playlist {
  display: block;
  overflow: hidden;
  background-color: $lightblack;
  .playlist-covers {
    display: inline-block;
    padding: 25px 8px 40px 8px;
    @media only screen and (min-width: $viewport-4) {
      padding: 25px 20px 40px 20px;
    }
    @media only screen and (min-width: $viewport-7) {
      padding: 25px 34px 40px 34px;
    }
    @media only screen and (min-width: $viewport-9) {
      padding: 30px 34px 40px 34px;
    }
    @media only screen and (min-width: $viewport-12) {
      padding: 35px 44px 60px 44px;
    }
    @media only screen and (min-width: $viewport-15) {
        padding: 40px 74px 80px 74px;
    }
    .playlist-header {
      padding: 0 12px 24px 12px;
      .playlist-header__icon {
        text-align: center;
        &.i-playlist {
          opacity: 1;
        }
      }
      .playlist-header__title {
        color: $white;
        font-family: $font-family-sans-serif;
        font-size: 14px;
        font-weight: 700;
        line-height: 1.25;
        letter-spacing: 1px;
        text-align: center;
        text-transform: uppercase;
      }
    }
  }
}
</style>
