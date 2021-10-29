module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/child-vue2/' : '/',
  outputDir: 'child-vue2',
  productionSourceMap: false,
  devServer: {
    hot: false,
    disableHostCheck: true,
    port: 4008,
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
