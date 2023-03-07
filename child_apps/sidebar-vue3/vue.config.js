module.exports = {
  outputDir: "sidebar-vue3",
  publicPath: "/child/sidebar-vue3/",
  productionSourceMap: false,
  devServer: {
    hot: false,
    historyApiFallback: true,
    allowedHosts: "all",
    port: 4060,
    open: false,
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  lintOnSave: false,
  // 自定义webpack配置
  configureWebpack: {},
};
