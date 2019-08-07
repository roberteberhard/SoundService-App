<template>
  <section class="user-playlists">

    <NetworkSpinner
      v-if="loading===waiting" />

    <NetworkError
      v-else-if="loading===error" />

    <div
      v-else-if="loading===success" class="playlists-container" >

    <header class="playlists-header">
      <div class="playlists-header--icon i-playlists"></div>
      <h3 class="playlists-header--title">
        {{ userPlaylist.user }}<span class="title--arrow"> • </span>{{ userPlaylist.title }}<span class="title--arrow"> • </span>{{ userPlaylist.tracks }} Tracks
      </h3>
    </header>

      <article v-for="item in playlists" :key="item.id" :class="[ item.slug===userPlaylist.slug ? 'playlist-cover active' : 'playlist-cover' ]">
        <a @click="onPlaylistSelected( { user: item.user, playlist: item.slug, track: item.track } )" class="playlist-cover-link">
          <div class="playlist-cover-ctrl">
            <span class="i-tracks">
              {{ item.tracks }}
            </span>
          </div>
          <div class="playlist-cover-desc">
            <h2 class="playlist-cover-title">{{ item.title }}</h2>
            <p class="playlist-cover-by">by {{ item.user }}</p>
            <div class="playlist-cover-genre">
              <span v-for="(genre, index) in item.genre.slice(0,3)" :key="index" class="genre-tag" >{{ genre.toLowerCase() }}</span>
            </div>
          </div>
          <img :src="`${item.cover}`" :alt="item.title">
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
  name: 'UserPlaylist',
  data () {
    return {
      waiting: 'waiting',
      error: 'error',
      success: 'success'
    }
  },
  watch: {
    '$route' (to, from) {
      this.$store.dispatch('videos/fetchPlaylistVideoTracks', to.params) // a) fetch new videolist
      this.$store.dispatch('playlists/updateUserPlaylist', to.params) // b) update user playlist
    }
  },
  components: {
    NetworkSpinner,
    NetworkError
  },
  methods: {
    onPlaylistSelected: function (params) {
      if (this.$route.params.playlist !== params.playlist) {
        this.$router.push({ name: 'VideoPage', params: { user: params.user, playlist: params.playlist, track: params.track } })
      }
    }
  },
  computed: {
    ...mapGetters('playlists', {
      loading: 'getLoadingState',
      playlists: 'getUserPlaylists',
      userPlaylist: 'getSelectedUserPlaylist'
    })
  },
  created () {
    this.$store.dispatch('playlists/fetchUserPlaylists', this.$route.params)
  }
}
</script>

<style lang="scss" scoped>
.user-playlists {
  background-color: $darkgrey;

  .playlists-container {
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

    .playlists-header {
      padding: 0 12px 24px 12px;
      .playlists-header--icon {
        text-align: center;
        &.i-playlists {
          opacity: 1;
        }
      }

      .playlists-header--title {
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

  .playlist-cover-link {
    display: block;
    cursor: pointer;

    .playlist-cover-ctrl {
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
    .playlist-cover-desc {
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 12px;
      .playlist-cover-title {
        color: $white;
        font-size: 15px;
        font-weight: 900;
        @media only screen and (min-width: $breakpoint-small) {
          font-size: 18px;
        }
      }
      .playlist-cover-by {
        padding-top: 2px;
        color: $white;
        font-size: 11px;
        font-weight: 500;
        @media only screen and (min-width: $breakpoint-small) {
          font-size: 13px;
        }
      }
      .playlist-cover-genre {
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
      .playlist-cover-ctrl {
        opacity: 1;
      }
    }
  }
}
// active
.playlist-cover.active {
  .playlist-cover-link {
    .playlist-cover-ctrl {
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
