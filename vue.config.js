const getCSSModuleLocalIdent = require('./build/getCSSModuleLocalIdent');

module.exports = {
  css: {
    loaderOptions: {
      css: {
        getLocalIdent: getCSSModuleLocalIdent,
      },
    },
  },
};
