const Encore = require('@symfony/webpack-encore')
const HtmlPlugin = require('html-webpack-plugin')

Encore.addEntry('index', './src/index.js')
  .setOutputPath('dist')
  .setPublicPath('/')
  .cleanupOutputBeforeBuild()
  .enableSingleRuntimeChunk()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .enablePostCssLoader()
  .addPlugin(new HtmlPlugin({
    template: './src/index.html',
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true
    }
  }))

module.exports = Encore.getWebpackConfig()
