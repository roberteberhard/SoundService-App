<template>
  <section class="featured-slider">
    <div class="row">
      <div class="featured-heading">
        <div class="featured-title">
          <h1>Soundservice is the best place to discover my personal playlists</h1>
        </div>
        <div class="featured-description">
          <p>Get unlimited, ad-free listening with 14 days on the house and $4.99/month after.</p>
        </div>
        <div class="featured-author">
          <div class="author-avatar" style="background-image: url(https://hackernoon.com/archive-avatars/maciejcieslar);"></div>
          <div class="author-name">
            <strong><a href="/@maciejcieslar">Robert Eberhard</a></strong>
            <p>@roberteberhard</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturedSlider',
  data: function () {
    return {
      images: [
        '../../assets/images/soundservice-jammer.png',
        '../../assets/images/soundservice-jammer.png',
        '../../assets/images/soundservice-jammer.png'
      ],
      currentNumber: 0,
      timer: null
    }
  }
}
</script>

<style lang="scss" scoped>
.featured-slider {
  width: 100%;
  height: 640px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  background-color: $jetblack;
  background-image: url("../../assets/images/soundservice-jammer.png");

  @media only screen and (min-width: $breakpoint-tablet) {
    height: 720px;
  }

  @media only screen and (min-width: $breakpoint-notebook) {
    height: 800px;
  }

  @media only screen and (min-width: $breakpoint-desktop) {
    height: 1000px;
  }

  .row {

    .featured-heading {
      width: 60%;
      padding-top: 100px;

      @media only screen and (min-width: $breakpoint-small) {
        width: 55%;
        padding-left: 12px;
      }

      @media only screen and (min-width: $breakpoint-tablet) {
        width: 50%;
        padding-top: 138px;
      }

      @media only screen and (min-width: $breakpoint-notebook) {
        width: 45%;
        padding-top: 172px;
      }

      @media only screen and (min-width: $breakpoint-desktop) {
        width: 40%;
        padding-top: 215px;
      }

      .featured-title {
        h1 {
          color: $white;
        }
      }

      .featured-description {
        padding-top: 20px;

        p {
          color: $white;
          line-height: 1.5;
        }
      }

      .featured-author {
        padding-top: 30px;
      }
    }
  }
}
</style>
