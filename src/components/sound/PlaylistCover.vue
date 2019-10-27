<template>
  <article class="playlist-cover" :class="{'active': isActive}">
    <router-link :to="{ name: 'Sound', params: { user: playlist.user, playlist: playlist.slug, track: playlist.track } }">
      <div class="cover-ctrl">
        <span class="i-tracks">{{ playlist.tracks }} tracks</span>
      </div>
      <div class="cover-desc">
        <h2 class="cover-title">{{ playlist.title }}</h2>
        <p class="cover-by">by {{ playlist.user }} {{ id }}</p>
        <div class="cover-genre">
          <span v-for="(genre, index) in playlist.genre.slice(0,3)" :key="index" class="genre-tag" >{{ genre.toLowerCase() }}</span>
        </div>
      </div>
      <img :src="`${playlist.cover}`" :alt="playlist.title">
    </router-link>
  </article>
</template>

<script>
export default {
  name: 'PlaylistCover',
  props: ['playlist', 'id'],
  computed: {
    isActive: function () {
      if (this.playlist.id === this.id) {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.playlist-cover {
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
        @media only screen and (min-width: $viewport-4) {
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
        @media only screen and (min-width: $viewport-4) {
          font-size: 18px;
        }
      }
      .cover-by {
        padding-top: 2px;
        color: $white;
        font-size: 13px;
        font-weight: 500;
        @media only screen and (min-width: $viewport-4) {
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
          @media only screen and (min-width: $viewport-4) {
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
