const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
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
  transpileDependencies: true,
});
