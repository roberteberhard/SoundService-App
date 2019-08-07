<template>
  <div class="network-spinner">
    <div class="spinner-dark"></div>
  </div>
</template>

<style scoped lang="scss">
.network-spinner {
  position: relative;
  height: 300px;
  width: 100%;
  .spinner-dark {
    position: absolute;
    z-index: 0;
    top: 100px;
    left: 50%;
    height: 26px;
    width: 26px;
    &:not(:required):after {
      content: '';
      display: block;
      font-size: 10px;
      width: 8px;
      height: 8px;
      animation: spinner 1500ms infinite linear;
      border-radius: 0.5em;
      box-shadow:
        $oilgrey 1.5em 0 0 0,
        $oilgrey 1.1em 1.1em 0 0,
        $oilgrey 0 1.5em 0 0,
        $oilgrey -1.1em 1.1em 0 0,
        $oilgrey -1.5em 0 0 0,
        $oilgrey -1.1em -1.1em 0 0,
        $oilgrey 0 -1.5em 0 0,
        $oilgrey 1.1em -1.1em 0 0;
    }
  }
}
@keyframes spinner {
  0% {transform: rotate(0deg)};
  100% {transform: rotate(360deg)};
}
</style>
