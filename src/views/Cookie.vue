<template>
  <main class="main">
    <h1>Cookie</h1>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Cookie',
  methods: mapActions(['applyControlView']),
  created () {
    this.applyControlView('cookie')
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
