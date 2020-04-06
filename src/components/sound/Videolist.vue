<template>
  <section class="video-playlist">
    <NetworkSpinner v-if="videoViewMode===waiting" />
    <NetworkError v-else-if="videoViewMode===error" />
    <div v-else-if="videoViewMode===success" class="video-covers" >
      <header class="videos-header">
        <div class="videos-header--icon i-videos"></div>
        <h3 class="videos-header--title">
          Track {{ this.indexPosition( allVideolist, activeVideolist.track ) }} of {{ allVideolist.length }}<span class="title--arrow"> • </span>{{ activeVideolist.artist }}<span class="title--arrow"> • </span>{{ activeVideolist.title }}
        </h3>
      </header>
      <VideolistCover v-for="videolist in allVideolist" :key="videolist.id" :video="videolist" :id="activeVideolist.id" :mode="isPlayerPlaying"></VideolistCover>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import NetworkSpinner from '@/components/asset/NetworkSpinner.vue'
import NetworkError from '@/components/asset/NetworkError.vue'
import VideolistCover from '@/components/sound/VideolistCover.vue'

export default {
  name: 'Videolist',
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
    VideolistCover
  },
  computed: mapGetters(['videoViewMode', 'allVideolist', 'activeVideolist', 'isPlayerPlaying']),
  methods: {
    ...mapActions(['fetchVideolist']),
    indexPosition (allVideolist, track) {
      for (let i = 0; i < allVideolist.length; i++) {
        if (allVideolist[i].track === track) {
          return i + 1
        }
      }
      return 0
    }
  },
  created () {
    this.fetchVideolist(this.$route.params)
  }
}
</script>

<style lang="scss" scoped>
.video-playlist {
  margin-top: 100vh;
  background-color: $jetblack;
  .video-covers {
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
    img {
      display: block;
      width: auto;
      height: auto;
      max-width: 100%;
    }
  }
}
</style>
