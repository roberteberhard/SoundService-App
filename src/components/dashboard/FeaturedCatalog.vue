<template>
  <section class="featured-catalog">
    <div class="row">
        <article class="featured-article">
          <div class="player-box"></div>
        </article>
        <div class="featured-play">
          <div class="play-now" @click="playNow">Play Now</div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturedCatalog',
  methods: {
    playNow: function (event) {
      event.target.classList.remove('animate')
      event.target.classList.add('animate')
      setTimeout(function () {
        event.target.classList.remove('animate')
      }, 700)
    }
  }
}
</script>

<style scoped lang="scss">
.featured-catalog {
  overflow: hidden;
  width: 100%;
  height: 480px;
  margin: -250px 0 0 0;
  color: $text-color;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  background-color: transparent;
  background-image: $home-featured-ghost;
  @media only screen and (min-width: $breakpoint-small) {
    width: calc( 100% - 24px);
    height: 550px;
    margin: -250px 12px 0 12px;
  }
  @media only screen and (min-width: $breakpoint-mobile) {
    height: 570px;
    margin: -250px 12px 0 12px;
  }
  @media only screen and (min-width: $breakpoint-tablet) {
    height: 500px;
    margin: -300px 12px 0 12px;
  }
  @media only screen and (min-width: $breakpoint-notebook) {
    height: 500px;
    margin: -400px 12px 0 12px;
  }
  @media only screen and (min-width: $breakpoint-desktop) {
    height: 640px;
    margin: -540px 12px 0 12px;
  }
  .row {
    .featured-article {
      display: flex;
      justify-content: center;
      @media only screen and (min-width: $breakpoint-tablet) {
        justify-content: flex-end;
      }
      .player-box {
        margin-top: 270px;
        width: 356px;
        height: 200px;
        border: 2px solid black(0.95);
        @media only screen and (min-width: $breakpoint-small) {
          margin-top: 270px;
          width: 426px;
          height: 240px;
        }
        @media only screen and (min-width: $breakpoint-mobile) {
          margin-top: 290px;
          width: 426px;
          height: 240px;
        }
        @media only screen and (min-width: $breakpoint-tablet) {
          margin-top: 180px;
          width: 426px;
          height: 240px;
        }
        @media only screen and (min-width: $breakpoint-notebook) {
          margin-top: 170px;
          width: 426px;
          height: 240px;
        }
        @media only screen and (min-width: $breakpoint-desktop) {
          margin-top: 220px;
          width: 640px;
          height: 360px;
        }
      }
    }
    .featured-play {
      position: absolute;
      top: 40px;
      left: 0px;
      width: 55%;
      .play-now {
        cursor: pointer;
        margin: 0 auto;
        width: 60px;
        height: 60px;
        font-size: 0 !important;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 100% 100%;
        background-image: $sose-icon-play;
        display: inline-block;
        -webkit-appearance: none;
        appearance: none;
        position: relative;
        transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
        &:focus {
          outline: 0;
        }
        &:before, &:after{
          position: absolute;
          content: '';
          display: block;
          width: 140%;
          height: 100%;
          left: -20%;
          z-index: -1000;
          transition: all ease-in-out 0.5s;
          background-repeat: no-repeat;
        }
        &:before{
          display: none;
          top: -75%;
          background-image:
          radial-gradient(circle, lightcoral 20%, transparent 20%),
          radial-gradient(circle,  transparent 20%, lightcoral 20%, transparent 30%),
          radial-gradient(circle, lightcoral 20%, transparent 20%),
          radial-gradient(circle, lightcoral 20%, transparent 20%),
          radial-gradient(circle,  transparent 10%, lightcoral 15%, transparent 20%),
          radial-gradient(circle, lightcoral 20%, transparent 20%),
          radial-gradient(circle, lightcoral 20%, transparent 20%),
          radial-gradient(circle, lightcoral 20%, transparent 20%),
          radial-gradient(circle, lightcoral 20%, transparent 20%);
          background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
          background-position: 0% 80%, -5% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 85% 30%;
        }
        &:after{
          display: none;
          bottom: -75%;
          background-image:
          radial-gradient(circle, lightcoral 20%, transparent 20%),
          radial-gradient(circle, lightcoral 20%, transparent 20%),
          radial-gradient(circle,  transparent 10%, lightcoral 15%, transparent 20%),
          radial-gradient(circle, lightcoral 20%, transparent 20%),
          radial-gradient(circle, lightcoral 20%, transparent 20%),
          radial-gradient(circle, lightcoral 20%, transparent 20%),
          radial-gradient(circle, lightcoral 20%, transparent 20%);
          background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
          background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
        }
        &:active{
          transform: scale(0.9);
        }
        &.animate{
          &:before{
            display: block;
            animation: topBubbles ease-in-out 0.75s forwards;
          }
          &:after{
            display: block;
            animation: bottomBubbles ease-in-out 0.75s forwards;
          }
        }
      }
      @media only screen and (min-width: $breakpoint-small) {
        width: 55%;
        .play-now {
          width: 68px;
          height: 68px;
        }
      }
      @media only screen and (min-width: $breakpoint-tablet) {
        width: 50%;
        .play-now {
          width: 78px;
          height: 78px;
        }
      }
      @media only screen and (min-width: $breakpoint-notebook) {
        width: 45%;
        top: 80px;
        .play-now {
          width: 88px;
          height: 88px;
        }
      }
      @media only screen and (min-width: $breakpoint-desktop) {
        width: 40%;
        top: 160px;
      }
    }
  }
  @keyframes topBubbles {
    0%{
      background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
    }
    50% {
      background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
    }
    100% {
      background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
      background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;
    }
  }
  @keyframes bottomBubbles {
    0%{
      background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
    }
    50% {
      background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
    }
    100% {
      background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
      background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;
    }
  }
}
</style>
