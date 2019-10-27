<template>
  <footer id="footer" :class="controlView">
    <div class="row">
      <div class="footer-brand">
        <div class="footer-brand__logo i-sose">Soundservice</div>
      </div>
      <nav class="footer-nav">
        <div class="footer-meta">
          <h2>Do you have your own favorite song or do you miss one?</h2>
          <p>We would like to expand this list, add more tracks. Leave us a <a class="link" :href="`mailto:${email}`">comment</a> with your favorite song, we are curious which song you love.</p>
        </div>
        <div class="footer-social">
          <ul>
            <li><a :href="twitter" target="_blank"><div class="social-icon i-twitter">Twitter</div></a></li>
            <li><a :href="instagram" target="_blank"><div class="social-icon i-instagram">Instagram</div></a></li>
            <li><a class="link" :href="`mailto:${email}`"><div class="social-icon i-airplane">Email</div></a></li>
          </ul>
        </div>
      </nav>
      <nav class="footer-legal">
        <div class="footer-privacy">
          <ul>
            <router-link :to="{ name: 'Privacy' }" tag="li" class="link">Privacy Policy</router-link>
            <router-link :to="{ name: 'Cookie' }" tag="li" class="link">Cookie</router-link>
            <router-link :to="{ name: 'Legal' }" tag="li" class="link">Legal</router-link>
          </ul>
        </div>
        <div class="footer-copyright">
          <p>© Soundservice {{year}}</p>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Footer',
  data () {
    return {
      twitter: 'https://twitter.com/soundservicecom',
      instagram: 'https://www.instagram.com/soundservice/',
      email: 'hello@soundservice.com',
      year: new Date().getFullYear()
    }
  },
  computed: mapGetters(['controlView'])
}
</script>

<style scoped lang="scss">
#footer {
  display: block;
  overflow: hidden;
  width: 100% ;
  height: auto;
  margin: 0;
  padding: 0 12px;
  background-color: $lightblack;
  .row {
    .footer-brand {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 25px;
      @media only screen and (min-width: $viewport-9) {
        align-items: flex-start;
        margin-bottom: 30px;
      }
      .footer-brand__logo {
        color: transparent;
        font-size: 0;
        &.i-sose::before {
          background-image: $home-logo-white;
        }
      }
    }
    .footer-nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      @media only screen and (min-width: $viewport-9) {
        flex-direction: row;
        align-items: flex-start;
      }
      .footer-meta {
        margin-bottom: 30px;
        @media only screen and (min-width: $viewport-9) {
          width: 67%;
          margin-bottom: 70px;
        }
        h2 {
          color: $white;
          text-align: center;
          line-height: 1.15;
          margin-bottom: 15px;
          @media only screen and (min-width: $viewport-9) {
            text-align: left;
          }
        }
        p {
          color: $ghost;
          text-align: center;
          @media only screen and (min-width: $viewport-9) {
            text-align: left;
          }
        }
      }
      .footer-social {
        margin-bottom: 40px;
        @media only screen and (min-width: $viewport-9) {
          width: 33%;
          text-align: right;
          margin-bottom: 70px;
        }
        ul {
          display: inline-block;
          list-style: none;
          li {
            float: left;
            margin: 0 6px;
            .social-icon {
              width: 48px;
              height: 48px;
              padding: 10px;
              border-radius: 50%;
              background-color: white(0.1);
              font-size: 0;
              color: transparent;
              &.i-airplane::before {
                background-position: -28px 0;
              }
              &.i-instagram::before {
                background-position: -28px 0;
              }
              &.i-twitter::before {
                background-position: -28px 0;
              }
              // transition
              transition: background-color .6s cubic-bezier(.19,1,.22,1);
            }
            // animation
            a:hover {
              .social-icon {
                background-color: white(0.2);
              }
            }
          }
        }
      }
    }

    .footer-legal {
      display: flex;
      align-items: row;
      .footer-privacy {
        margin-bottom: 10px;
        text-align: center;
        ul {
          display: inline-block;
          list-style: none;
          li {
            float: left;
            margin-right: 10px;
            @media only screen and (min-width: $viewport-7) {
              margin-right: 15px;
            }
            &.link {
              font-size: 13px;
              @media only screen and (min-width: $viewport-4) {
                font-size: 14px;
              }
            }
          }
        }
      }
      .footer-copyright {
        margin-left: auto;
        margin-bottom: 30px;
        p {
          color: $ghost;
          font-size: 13px;
            @media only screen and (min-width: $viewport-4) {
              font-size: 14px;
          }
        }
      }
    }
  }
  /**
   * Home section
   */
  &.home {
    padding: 0;
    background-color: $ghost;
    @media only screen and (min-width: $viewport-4) {
      width: calc( 100% - 24px);
      margin: 0 12px 12px 12px;
    }
    .row {
      .footer-brand {
        .footer-brand__logo {
          &.i-sose::before {
            background-image: $home-logo-black;
          }
        }
      }
      .footer-nav {
        .footer-meta {
          margin-bottom: 30px;
          h2 {
            color: $text-color;
          }
          p {
            color: $text-color;
          }
        }
        .footer-social {
          ul {
            li {
              .social-icon {
                background-color: black(0.075);
                &.i-airplane::before {
                  background-position: 0 0;
                }
                &.i-instagram::before {
                  background-position: 0 0;
                }
                &.i-twitter::before {
                  background-position: 0 0;
                }
              }
              // animation
              a:hover {
                .social-icon {
                  background-color: black(0.15);
                  &.i-airplane::before {
                    background-position: 0 0;
                  }
                  &.i-instagram::before {
                    background-position: 0 0;
                  }
                  &.i-twitter::before {
                    background-position: 0 0;
                  }
                }
              }
            }
          }
        }
      }
      .footer-legal {
        .footer-copyright {
          p {
            color: $text-color;
          }
        }
      }
    }
  }
}
</style>
