<template>
  <section class="home-slider">
    <div id="slideshow">
      <img v-for="image in slideShowImages"
        :key="image.id"
        :src="image.img"
        :class="image.class"
        :alt="image.alt"
      />
    </div>
    <div class="row">
      <div class="home-heading">
        <h1 class="home-title">Welcome to Soundservice and enjoy our curated video playlists!</h1>
        <h2 class="home-subtitle">Whether you are chilling out, coding or spending a day on the beach, different playlists are suitable for different situations and environments.</h2>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Slider',
  data: function () {
    return {
      slideShowImages: [
        { id: 0, style: 'background-color: #424244', img: 'https://www.roberteberhard.com/img/soundservice-jammer.png', alt: 'Soundservice Jammer', class: 'slide first-one active' },
        { id: 1, style: 'background-color: #576a69', img: 'https://www.roberteberhard.com/img/soundservice-bronson', alt: 'Soundservice Bronson', class: 'slide' },
        { id: 2, style: 'background-color: #404b47', img: 'https://www.roberteberhard.com/img/soundservice-staff.png', alt: 'Soundservice Staff', class: 'slide' }
      ],
      currentNumber: 0,
      timer: null,
      slideshow: null
    }
  },
  methods: {
    ...mapActions(['applySliderColor']),
    startRotation () {
      this.slideshow = document.getElementById('slideshow')
      this.timer = setInterval(this.next, 8000)
      this.applySliderColor(this.slideShowImages[0].style)
    },
    stopRotation () {
      clearTimeout(this.timer)
      this.timer = null
      this.applySliderColor(this.slideShowImages[0].style)
    },
    next () {
      this.currentNumber += 1
      this.updateSlider()
    },
    prev () {
      this.currentNumber -= 1
      this.updateSlider()
    },
    updateSlider () {
      if (this.slideshow != null) {
        let slides = this.slideshow.getElementsByClassName('slide')
        let i
        for (i = 0; i < slides.length; i++) {
          if (this.currentIndex() === i) {
            slides[i].classList.add('active')
            this.applySliderColor(this.slideShowImages[i].style)
          } else {
            slides[i].classList.remove('active')
          }
        }
      }
    },
    currentIndex () {
      return Math.abs(this.currentNumber) % this.slideShowImages.length
    }
  },
  mounted () {
    this.startRotation()
  },
  beforeDestroy () {
    this.stopRotation()
  }
}
</script>

<style lang="scss" scoped>
.home-slider {
  #slideshow {
    display: block;
    overflow: hidden;
    img {
      &.slide {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 640px;
        opacity: 0;
        object-fit: cover;
        // transition
        transition: opacity 1000ms   ease-in-out 0s;
        // breakpoints
        @media only screen and (min-width: $viewport-9) {
          height: 720px;
        }
        @media only screen and (min-width: $viewport-12) {
          height: 800px;
        }
        @media only screen and (min-width: $viewport-15) {
          height: 1000px;
        }
        &.first-one {
          position: relative;
        }
        &.active {
          z-index: 1;
          opacity: 1;
        }
      }
    }
  }
  .row {
    position: absolute;
    top: 0;
    z-index: 3;
    .home-heading {
      width: 100%;
      padding-top: 100px;
      padding-left: 12px;
      @media only screen and (min-width: $viewport-7) {
        width: 80%;
        padding-top: 130px;
      }
      @media only screen and (min-width: $viewport-9) {
        width: 60%;
        padding-top: 140px;
      }
      @media only screen and (min-width: $viewport-12) {
        width: 50%;
        padding-top: 160px;
      }
      @media only screen and (min-width: $viewport-15) {
        width: 40%;
        padding-top: 220px;
      }
      h1.home-title {
        color: $white;
        line-height: 1.1;
        margin-bottom: 25px;
      }
      h2.home-subtitle {
        color: $white;
        line-height: 1.25;
      }
    }
  }
}
</style>
