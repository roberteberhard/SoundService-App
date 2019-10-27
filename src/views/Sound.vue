<template>
  <main>
      <Videolist></Videolist>
      <Playlist></Playlist>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

import Videolist from '@/components/sound/Videolist.vue'
import Playlist from '@/components/sound/Playlist.vue'

export default {
  name: 'Sound',
  components: {
    Videolist,
    Playlist
  },
  methods: mapActions(['applyControlView', 'applyPlayerActiveMode']),
  created () {
    this.applyControlView('sound')
    this.applyPlayerActiveMode(true)
  }
}
</script>
