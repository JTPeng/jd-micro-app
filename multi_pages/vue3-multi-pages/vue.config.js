module.exports = {
  outputDir: "main-vue3",
  publicPath: "/main-vue3/",
  pages: {
    sidebar: {
      entry: "src/module/sidebar/main.js",
      template: "public/index.html",
      filename: "sidebar.html",
    },
    main: {
      entry: "src/module/main/main.js",
      template: "public/index.html",
      filename: "main.html",
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
