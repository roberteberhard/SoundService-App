<template>
  <main>
    <UserVideos />
    <UserPlaylist />
  </main>
</template>

<script>
import UserVideos from '@/components/UserVideos.vue'
import UserPlaylist from '@/components/UserPlaylist.vue'

export default {
  name: 'videopage',
  components: {
    UserVideos,
    UserPlaylist
  },
  created () {
    /**
     * Manage Navbar and Player on page app startup
     */
    // this.$store.dispatch('navbar/manageViewState', true)
    // this.$store.dispatch('player/updateDisplayMode', 'top')
  }
}
</script>
