let mix = require('laravel-mix')

require('./nova.mix')

mix
  .options({
    publicPath: __dirname,
  })
  .setPublicPath('dist')
  .js('resources/js/tool.js', 'js')
  .vue({ version: 3 })
  .css('resources/css/tool.css', 'css')
  .nova('coddin/test-tool')
