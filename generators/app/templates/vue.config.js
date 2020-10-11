/* eslint-disable*/
const path = require('path');
const  UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const isPro =  process.env.NODE_ENV === 'production'

module.exports = {
  productionSourceMap: false,
  publicPath: './',

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    },
    extract: true
  },

  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', 'ts'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
      },
    },
    plugins: isPro && [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            // warnings: false,
            drop_debugger: true,
            drop_console: true,
          },
        },
        sourceMap: false,
        parallel: true,
      })
    ] || undefined,
    devtool: !isPro && 'source-map'
  },

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
        // 清除已有的所有 loader,如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        svgRule.uses.clear()
        // 添加要替换的 loader
        svgRule.use('svg-sprite-loader').loader('svg-sprite-loader')
        .options({
            symbolId: 'icon-[name]'
        })
  },

  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    port: 4000,
    disableHostCheck: true,
    proxy: {
      // 由于后端接口不支持跨域，先通过webpack跨域。 等后端添加跨域之后，把.env.development 中 VUE_APP_BASE_API 改为 http://39.105.216.207
      '/devTest': {
          target: 'http://59.110.226.100:8072',
          changeOrigin: true,
          pathRewrite: {'^/devTest': ''}
      }
    }
  }
};
