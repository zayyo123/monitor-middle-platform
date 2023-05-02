/*
 * @Description: 公共文件，
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  configureWebpack: {
    resolve: {
      alias: {
        "@images": "@/assets/images",
      },
    },
  },
});
