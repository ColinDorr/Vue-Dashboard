/* eslint-disable */
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  devServer: {
    port: 8181
  },
  outputDir: "web/dist",
  css: {
    loaderOptions: {
      sass: {
        data: `@import "./src/styles/utils/utils.scss";`
      }
    }
  },
  configureWebpack: {
    plugins: [
      // Use this plugin locally. Don't activate it in production.
      // new BundleAnalyzerPlugin()
    ]
  },
  chainWebpack: config => {
    // Uncomment to disable eslint.
    config.module.rules.delete('eslint');
  }
};