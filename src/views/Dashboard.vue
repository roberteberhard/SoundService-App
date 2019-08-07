<template>
  <main>
    <FeaturedSlider />
    <FeaturedCatalog />
    <FeaturedPlaylist />
  </main>
</template>

<script>
import FeaturedSlider from '@/components/dashboard/FeaturedSlider.vue'
import FeaturedCatalog from '@/components/dashboard/FeaturedCatalog.vue'
import FeaturedPlaylist from '@/components/dashboard/FeaturedPlaylist.vue'

export default {
  name: 'Dashboard',
  components: {
    FeaturedSlider,
    FeaturedCatalog,
    FeaturedPlaylist
  },
  created () {
    /**
     * Manage Navbar and Player on 'APP' startup
     */
    this.$store.dispatch('navbar/manageViewState', true)
    this.$store.dispatch('player/manageViewState', false)
  }
}
</script>
