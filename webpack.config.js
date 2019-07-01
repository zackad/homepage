const Encore = require('@symfony/webpack-encore')

Encore.addEntry('index', './src/index.js')
  .setOutputPath('dist')
  .setPublicPath('/')
  .cleanupOutputBeforeBuild()
  .enableSingleRuntimeChunk()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .enablePostCssLoader()

module.exports = Encore.getWebpackConfig()
