const path = require('path')

module.exports = {
  chainWebpack: config => {
    config
      .entry('app')
      .clear()
      .add('./app/frontend/src/main.js')

    config
      .plugin('html')
      .tap(args => {
        args[0].template = path.resolve(__dirname, 'app/frontend/public/index.html')
        return args
      })
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'app/frontend/src')
      }
    }
  },
  devServer: {
  }
}
