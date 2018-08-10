/* eslint-disable import/no-extraneous-dependencies */
const autoprefixer = require('autoprefixer');
const flexbugs = require('postcss-flexbugs-fixes');
const getCSSModuleLocalIdent = require('./build/getCSSModuleLocalIdent');

module.exports = {
  css: {
    loaderOptions: {
      css: {
        getLocalIdent: getCSSModuleLocalIdent,
      },
      postcss: {
        plugins: [
          flexbugs(),
          autoprefixer({
            flexbox: 'no-2009',
          }),
        ],
      },
    },
  },
};
