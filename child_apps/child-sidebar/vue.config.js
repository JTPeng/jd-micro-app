module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/child-sidebar/' : '/',
  outputDir: 'child-sidebar',
  productionSourceMap: false,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port: 4006,
    open: false,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  lintOnSave: false,
  // 自定义webpack配置
  configureWebpack: {
  },
}
