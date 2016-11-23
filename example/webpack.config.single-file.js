// same as webpack.config.js but as a single file for clarity
module.exports = require('../index')([
  {
    context: __dirname,
    entry: './main.js',
    output: {
      filename: 'index.js'
    },
    devServer: {
      host: '0.0.0.0',
      port: 4000
    },
    devtool: process.env.NODE_ENV === 'production' ? null : 'eval-source-map'
  },

  ({context, devServer, devtool}) => {
    return {
      output: {
        path: context + '/dist',
        publicPath: devtool ? `http://${devServer.host}:${devServer.port}/` : '/'
      }
    }
  }
])
