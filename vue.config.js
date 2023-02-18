/*
 * @Author: arvin(王德江)
 * @Date: 2022-08-05 14:24:57
 * @LastEditors: arvin(王德江)
 * @LastEditTime: 2022-08-05 14:57:23
 * @Description: 公共文件，修改前请告知其他成员
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '@/assets/images',
      },
    },
  },
})
