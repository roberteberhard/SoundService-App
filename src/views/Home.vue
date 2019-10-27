<template>
  <main>
    <Slider></Slider>
    <Catalog></Catalog>
    <Playlist></Playlist>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

import Slider from '@/components/home/Slider.vue'
import Catalog from '@/components/home/Catalog.vue'
import Playlist from '@/components/home/Playlist.vue'

export default {
  name: 'Home',
  components: {
    Slider,
    Catalog,
    Playlist
  },
  methods: mapActions(['applyControlView']),
  created () {
    this.applyControlView('home')
  }
}
</script>
