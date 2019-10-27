<template>
  <main class="main">
    <h1>Privacy</h1>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Privacy',
  methods: mapActions(['applyControlView']),
  created () {
    this.applyControlView('privacy')
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
