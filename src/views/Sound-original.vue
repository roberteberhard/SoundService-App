<template>
  <main>
    <VideoList></VideoList>
    <PlayList></PlayList>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

import VideoList from '@/components/sound/VideoList.vue'
import PlayList from '@/components/sound/PlayList.vue'

export default {
  name: 'Sound',
  components: {
    VideoList,
    PlayList
  },
  methods: mapActions(['applyPlayerActiveMode', 'applyDebugView']),
  created () {
    this.applyPlayerActiveMode(true)
    this.applyDebugView('sound')
  }
}
</script>
