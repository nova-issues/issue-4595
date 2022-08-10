const mix = require('laravel-mix')
const webpack = require('webpack')
const path = require('path')

class NovaExtension {
  name() {
    return 'nova-extension'
  }

  register(name) {
    this.name = name
  }

  webpackConfig(webpackConfig) {
    let rootNodeModules = path.resolve(__dirname, 'node_modules')

    webpackConfig.externals = {
      vue: 'Vue',
    }

    webpackConfig.resolve.alias = {
      ...(webpackConfig.resolve.alias || {}),
      'laravel-nova': path.join(
        __dirname,
        '../../vendor/laravel/nova/resources/js/mixins/packages.js'
      ),
    }

    webpackConfig.resolve.modules = ['node_modules']

    webpackConfig.output = {
      uniqueName: this.name,
    }
  }
}

mix.extend('nova', new NovaExtension())
