<template>
  <div class="network-error">
    <div class="network-display">
      <p class="error-message strong">
        Network Error!
      </p>
      <p class="error-message">
        --
      </p>
      <p class="error-message">
        Sorry, a network error occurred while establishing a connection to the server. Please press the browser's reload button.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NetworkError'
}
</script>

<style lang="scss" scoped>
.network-error {
  width: 100%;
  min-height: 300px;
  .network-display {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 60px);
    max-width: 680px;
    min-height: 140px;
    margin: 40px auto 0;
    padding: 20px;
    border-radius: 6px;
    background-color: $oilgrey;
    .error-message {
      &.strong {
        color: $white;;
        font-weight: 700
      }
      color: $ghost;
      font-family: $font-family-serif;
      font-weight: 400;
      font-size: 15px;
      text-align: center;
      line-height: 1.35;
    }
  }
}
</style>
