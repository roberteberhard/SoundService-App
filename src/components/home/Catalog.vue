<template>
  <section class="home-catalog">
    <div class="row">
        <div class="catalog-article">
          <div class="player-box"></div>
        </div>
        <div class="catalog-start">
          <router-link v-if="startPlaylist" :to="{ name: 'Sound', params: { user: startPlaylist.user, playlist: startPlaylist.slug, track: startPlaylist.track } }">
            <div class="start-now ready">Play</div>
          </router-link>
        </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Catalog',
  computed: mapGetters(['startPlaylist'])
}
</script>

<style scoped lang="scss">
.home-catalog {
  display: block;
  overflow: hidden;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 400px;
  margin: -250px 0 0 0;
  color: $text-color;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  background-color: transparent;
  background-image: $home-featured-ghost;
  @media only screen and (min-width: $viewport-4) {
    width: calc( 100% - 24px);
    height: 520px;
    margin: -250px 12px 0 12px;
  }
  @media only screen and (min-width: $viewport-7) {
    height: 550px;
    margin: -250px 12px 0 12px;
  }
  @media only screen and (min-width: $viewport-9) {
    height: 430px;
    margin: -300px 12px 0 12px;
  }
  @media only screen and (min-width: $viewport-12) {
    height: 430px;
    margin: -400px 12px 0 12px;
  }
  @media only screen and (min-width: $viewport-15) {
    height: 520px;
    margin: -500px 12px 0 12px;
  }
  .row {
    .catalog-article {
      display: flex;
      justify-content: center;
      @media only screen and (min-width: $viewport-9) {
        justify-content: flex-end;
      }
      .player-box {
        margin-top: 200px;
        width: 320px;
        height: 180px;
        border: 2px solid black(0.9);
        @media only screen and (min-width: $viewport-4) {
          margin-top: 250px;
          width: 420px;
          height: 236px;
        }
        @media only screen and (min-width: $viewport-7) {
          margin-top: 280px;
          width: 420px;
          height: 236px;
        }
        @media only screen and (min-width: $viewport-9) {
          margin-top: 160px;
          width: 420px;
          height: 236px;
        }
        @media only screen and (min-width: $viewport-12) {
          margin-top: 160px;
          width: 420px;
          height: 236px;
        }
        @media only screen and (min-width: $viewport-15) {
          margin-top: 180px;
          width: 480px;
          height: 270px;
        }
      }
    }
    .catalog-start {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 55%;
      height: auto;
      .start-now {
        cursor: pointer;
        display: block;
        margin: 10px auto 0;
        width: 78px;
        height: 78px;
        color: transparent;
        font-size: 0;
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 100% 100%;
        background-image: $sose-icon-play;
        appearance: none;
        &.ready {
          // animation
          animation: uiFadeIn 500ms normal forwards;
        }
      }
      @media only screen and (min-width: $viewport-4) {
        width: 55%;
        .start-now {
          width: 78px;
          height: 78px;
        }
      }
      @media only screen and (min-width: $viewport-9) {
        width: 50%;
        .start-now {
          width: 88px;
          height: 88px;
        }
      }
      @media only screen and (min-width: $viewport-12) {
        width: 45%;
        .start-now {
          width: 98px;
          height: 98px;
        }
      }
      @media only screen and (min-width: $viewport-15) {
        width: 40%;
      }
    }
  }
}
</style>
