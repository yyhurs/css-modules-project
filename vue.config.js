const path = require('path');
// const fs = require('fs');

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'));
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/scss/utils/_mixins.scss";',
      },
    },
  },
};
