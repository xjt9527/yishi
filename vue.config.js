// vue.config.js
const path = require('path');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';
console.log(isDevelopment);

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  /** 区分打包环境与开发环境
   * process.env.NODE_ENV==='production'  (打包环境)
   * process.env.NODE_ENV==='development' (开发环境)
   * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
   */
  pages: {
    index: {
      // 页面的入口文件
      entry: 'src/index/main.js',
      // 页面的模板文件
      template: 'public/index.html',
      // build 生成的文件名称  例： dist/index.html
      filename: 'index.html'
    },
    // template 默认会去找 public/subpage.html 页面，如果找不到会使用 public/index.html 文件
    // 输出文件会默认的推断为 subpage.html

  },

  publicPath: '/', // 公共路径
  // outputDir: process.env.NODE_ENV === "development" ? 'devdist' : 'dist', // 不同的环境打不同包名
  // css: {  // 一次配置，全局使用，这个scss 因为每个文件都要引入
  //     loaderOptions: {
  //         sass: {
  //             data: `@import "./src/assets/hotcss/px2rem.scss";`
  //         }
  //     }
  // },
  lintOnSave: false, // 关闭eslint
  productionSourceMap: false, // 生产环境下css 分离文件
  devServer: { // 配置服务器
    port: 8081,
    open: true,
    https: false,
    host:'0.0.0.0',
    overlay: {
      warnings: true,
      errors: true
    }
  },
  css: {
    // css拆分ExtractTextPlugin插件，默认true - 骨架屏需要为true
    extract:isDevelopment?false:true,
    sourceMap: false,
    modules: false
  },
  configureWebpack: (config)=>{
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
    // vue骨架屏插件配置
    // config.plugins.push(new SkeletonWebpackPlugin({
    //   webpackConfig: {
    //     entry: {
    //       index: resolve('./src/common/skeleton/skeleton.js'),
 
    //       // app1: path.join(__dirname, './src/skeleton.js')
    //     },
    //   },
    //   minimize: true,
    //   quiet: true,
    // }))
  },

  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('@', resolve('src'))
  }



}