const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
// const path = require('path')

module.exports = {
  outputDir: "main-vue3",
  publicPath: "/main-vue3/",
  productionSourceMap: false,
  devServer: {
    hot: false,
    // historyApiFallback: true,
    allowedHosts: "all",
    port: 3000,
    open: true,
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  },
  lintOnSave: false,
  // 自定义webpack配置
  configureWebpack: {
    output: {
      chunkLoadingGlobal: `webpackJsonp-main-vue3`,
    },
  },
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
