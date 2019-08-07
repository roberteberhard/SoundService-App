<template>
  <header class="navbar-header">
    <nav v-if="showing" class="navbar-wrapper">
      <div class="row">
        <router-link :to="{ name: 'Dashboard' }" exact tag="h1" class="navbar-logo" active-class="active">SOUNDSERVICE</router-link>
        <ul class="navbar-menu">
          <li>• • •</li>
        </ul>
        <!-- <ul class="menu">
          <router-link :to="{ name: 'UserView' , params: { user: 'robert-eberhard' }}" tag="li" class="menu-link" active-class="active"><a>User</a></router-link>
          <router-link :to="{ name: 'UserPlaylistView', params: { user: 'robert-eberhard', playlist: 'till-i-collapse' }}" tag="li" class="menu-link" active-class="active"><a>Playlist</a></router-link>
        </ul> -->
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'navbar',
  computed: {
    ...mapGetters('navbar', {
      showing: 'viewState'
    })
  }
}
</script>

<style scoped lang="scss">
.navbar-header {
  position: relative;
  height: 0;
  .navbar-wrapper {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 58px;
    background-color: transparent;
    .row {
      padding: 0 12px;
      height: 58px;
      h1.navbar-logo {
        position: absolute;
        cursor: pointer;
        width: 190px;
        height: 24px;
        top: 35px;
        left: 12px;
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 185px 20px;
        background-image: $home-logo;
        background-color: transparent;
        font-size: 0;
      }
      ul.navbar-menu {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        list-style: none;
        li {
          float: left;
          height: 58px;
          margin: 38px 0 0 40px;
          color: white;
          &.menu-link {
            a {
              color: #999;
              text-decoration: none;
            }
            &.active {
              a {
                color: lightseagreen;
              }
            }
          }
        }
      }
    }
  }
}
</style>
