<template>
  <main class="main">
    Legal
  </main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Legal',
  methods: mapActions(['applyControlView']),
  created () {
    this.applyControlView('legal')
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin: 0;
  padding: 0;
  background-color: $lightblack;
}
</style>
