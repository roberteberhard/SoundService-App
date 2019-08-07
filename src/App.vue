<template>
  <div class="app" :style="{ backgroundColor: selectedColor[0] }">
    <nav-bar />
    <video-player />
    <remote-control />
    <router-view />
    <footer-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'
import RemoteControl from '@/components/RemoteControl.vue'
import FooterView from '@/components/footer/FooterView.vue'

export default {
  components: {
    navBar: Navbar,
    videoPlayer: VideoPlayer,
    remoteControl: RemoteControl,
    footerView: FooterView
  },
  data: function () {
    return {
      red: '#996667',
      selectedColor: [
        '#3c3c3e',
        '#85db27',
        '#996667'
      ]
    }
  }
}
</script>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
    color: $text-color;
    font-size: 16px;
    font-family: $font-family-sans-serif;
    font-weight: normal;
    font-weight: 500;
    background-color: $lightblack;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
    a {
      color: $primary;
      text-decoration: none;
    }

    .app {
      display: block;
      overflow: hidden;
      // transition
      transition: background-color 750ms ease 0ms;
    }
}
</style>
