<template>
  <section class="featured-playlist">

    <header class="playlist-header row">
      <div class="playlist-header--icon i-bus">Beach Bus</div>
       <h3 class="playlist-header--title">Beach Bar Summer Playlists</h3>
    </header>

    <NetworkSpinner
      v-if="loading===waiting"/>

    <NetworkError
      v-else-if="loading===error" />

    <div v-else-if="loading===success" class="playlist-container" >

      <article v-for="item in playlists" :key="item.id" class="playlist-cover">
        <router-link :to="{ name: 'VideoPage', params: { user: item.user, playlist: item.slug, track: item.track } }">
          <div class="cover-ctrl">
            <span class="i-tracks">{{ item.tracks }} tracks</span>
          </div>
          <div class="cover-desc">
            <h2 class="cover-title">{{ item.title }}</h2>
            <p class="cover-by">by {{ item.user }}</p>
            <div class="cover-genre">
              <span v-for="(genre, index) in item.genre.slice(0,3)" :key="index" class="genre-tag" >{{ genre.toLowerCase() }}</span>
            </div>
          </div>
          <img :src="`${item.cover}`" :alt="item.title">
        </router-link>
      </article>

    </div>

  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import NetworkSpinner from '@/components/asset/NetworkSpinner.vue'
import NetworkError from '@/components/asset/NetworkError.vue'

export default {
  name: 'FeaturedPlaylist',
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
  computed: {
    ...mapGetters('playlists', {
      loading: 'getLoadingState',
      playlists: 'getHomePlaylists'
    })
  },
  created () {
    this.$store.dispatch('playlists/fetchHomePlaylists')
  }
}
</script>

<style scoped lang="scss">
.featured-playlist {
  margin-top: -100px;
  padding-bottom: 60px;
  background-color: $ghost;
  @include clearfix();

  @media only screen and (min-width: $breakpoint-small) {
    margin: -1px 12px 0 12px;
    width: calc(100% - 24px);
  }

  @media only screen and (min-width: $breakpoint-tablet) {
    margin: -30px 12px 0 12px;
  }

  @media only screen and (min-width: $breakpoint-desktop) {
    margin: -1px 12px 0 12px;
  }

  .playlist-header {
    &.row {
      height: 108px;

      .playlist-header--icon {
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

      .playlist-header--title {
        color: $lightgrey ;
        font-family: $font-family-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.35;
        text-align: center;
        padding-top: 74px;
      }
    }
  }
  .playlist-container {
    padding: 0 8px;
    @media only screen and (min-width: $breakpoint-small) {
      padding: 0 9px;
    }
    @media only screen and (min-width: $breakpoint-mobile) {
      padding: 0 25px;
    }
    @media only screen and (min-width: $breakpoint-tablet) {
      padding: 0 25px;
    }
    @media only screen and (min-width: $breakpoint-notebook) {
      padding: 0 35px;
    }
    @media only screen and (min-width: $breakpoint-desktop) {
        padding: 0 65px;
    }
  }
}
.playlist-cover {
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
  a {
    display: block;
    cursor: pointer;
    .cover-ctrl {
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      border: solid 2px rgba(147,204,59,0);
      background-color: rgba(0,0,0,0.32);
      transition: all 250ms ease;
      .i-tracks {
        position: absolute;
        top: 12px;
        right: 12px;
        color: $white;
        font-size: 11px;
      }
      &:after {
        content: "";
        width: 100%;
        height: 100%;
        display: inline-block;
        position: absolute;
        z-index: 2;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 42px 42px;
        background-image: $sose-icon-play;
        @media only screen and (min-width: $breakpoint-small) {
          background-size: 58px 58px;
        }
      }
    }
    .cover-desc {
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 12px;
      .cover-title {
        color: $white;
        font-size: 15px;
        font-weight: 900;
        @media only screen and (min-width: $breakpoint-small) {
          font-size: 18px;
        }
      }
      .cover-by {
        padding-top: 2px;
        color: $white;
        font-size: 13px;
        font-weight: 500;
        @media only screen and (min-width: $breakpoint-small) {
          font-size: 11px;
        }
      }
      .cover-genre {
        padding-top: 12px;
        .genre-tag {
          display: inline-block;
          padding: 4px 8px;
          margin: 0 2px 4px 2px;
          font-size: 10px;
          color: $white;
          font-weight: 500;
          border-radius: 20px;
          border: 1px solid $white;
          @media only screen and (min-width: $breakpoint-small) {
            padding: 4px 10px;
            margin: 0 3px 4px 3px;
            font-size: 11px;
          }
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
      .cover-ctrl {
        opacity: 1;
      }
    }
  }
}
// active
.playlist-cover.active {
  a {
    .cover-ctrl {
      opacity: 1;
      border: solid 2px $primary;
      background-color: rgba(0,0,0,0.32);
      &:after {
        background-size: 72px 72px;
        background-position: right bottom;
        background-image: $sose-playlist-selected-green;
      }
    }
  }
}
</style>
