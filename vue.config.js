module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_fonts.scss";
          @import "@/scss/_svg.scss";
          @import "@/scss/_colors.scss";
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
          @import "@/scss/_icons.scss";
          @import "@/scss/_main.scss";
        `
      }
    }
  }
}
