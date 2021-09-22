const IS_PROD = process.env.NODE_ENV === 'production'
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin =require('mini-css-extract-plugin')
module.exports = {
    configureWebpack:{
        plugins: [
            // new BundleAnalyzerPlugin()
        ]},
  chainWebpack(config) {
    if (IS_PROD) {
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          vue: {
            name: 'vue',
            test: /[\\/]node_modules[\\/]vue[\\/]/,
            priority: -10
          },
          vuex: {
            name: 'vuex',
            test: /[\\/]node_modules[\\/]vuex[\\/]/,
            priority: -10
          },
          'vue-router': {
            name: 'vue-router',
            test: /[\\/]node_modules[\\/]vue-router[\\/]/,
            priority: -10
          },
          'element-ui': {
            name: 'element-ui',
            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
            priority: -10
          },
          'vendors': {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -20
          },
          'echarts': {
            name: 'echarts',
            test: /[\\/]node_modules[\\/]echarts[\\/]/,
            priority: -10
          }
        }
      })
    }
    // let miniCssExtractPlugin = new MiniCssExtractPlugin({
    //     filename: 'assets/[name].[hash:8].css',
    //     chunkFilename: 'assets/[name].[hash:8].css'
    //   })
    // config.plugin('extract-css').use(miniCssExtractPlugin)
  }
}