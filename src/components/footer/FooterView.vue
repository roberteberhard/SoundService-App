<template>
  <footer class="footer-view">
    <nav>
      <ul>
        <router-link :to="{ name: 'Dashboard' }" tag="li" class="app-footer-link" active-class="active">
          back to home
        </router-link>
        <li><div class="social-email i-airplane"></div></li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'FooterView'
}
</script>

<style scoped lang="scss">
.footer-view {
  margin: 0 12px 12px 12px;
  width: calc(100% - 24px);
  height: auto;
  min-height: 260px;
  padding: 24px;
  background-color: darken($ghost, 15%);
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    li {
      float: left;
      margin: 0 20px;
      &.app-footer-link {
        a {
          color: #20b2aa;
          font-weight: 700;
          text-decoration: none;
        }
        &.active {
          a {
            color: #20b2aa;
            font-weight: 700;
          }
        }
      }
      .social-email {
        display: block;
        &.i-airplane {
          opacity: 0.5;
        }
      }
    }
  }
}
</style>
