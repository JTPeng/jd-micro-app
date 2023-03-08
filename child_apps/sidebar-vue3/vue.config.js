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
  chainWebpack: (config) => {
    // config.resolve.alias.set("@micro-zoe/micro-app", path.join(__dirname, '../../../micro-app/lib/index.esm.js'))
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        options.compilerOptions = {
          ...(options.compilerOptions || {}),
          isCustomElement: (tag) => /^micro-app/.test(tag),
        };
        return {
          ...options,
          reactivityTransform: true,
        };
      });
  },
};
