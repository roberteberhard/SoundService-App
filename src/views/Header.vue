<template>
  <header id="header">
    <nav class="navbar">
      <div class="row">
        <router-link :to="{ name: 'Home' }" exact tag="h1" class="navbar__logo">SOUNDSERVICE</router-link>
        <ul class="navbar__menu">
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
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
#header {
  position: relative;
  width: 100%;
  height: 0px;
  .navbar {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 58px;
    background-color: transparent;
    .row {
      height: 0;
      .navbar__logo {
        position: absolute;
        cursor: pointer;
        top: 24px;
        left: 12px;
        color: transparent;
        font-size: 0;
        width: 48px;
        height: 48px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 48px 48px;
        background-color: transparent;
        background-image: $sose-icon-logo;
      }
      .navbar__menu {
        position: absolute;
        top: 24px;
        right: 12px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        list-style: none;
        li {
          color: $white;
        }
      }
    }
  }
}
</style>
