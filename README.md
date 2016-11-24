[![Build Status](https://travis-ci.org/neves/webpack-merge-plus.svg?branch=master)](https://travis-ci.org/neves/webpack-merge-plus)
[![codecov](https://codecov.io/gh/neves/webpack-merge-plus/branch/master/graph/badge.svg)](https://codecov.io/gh/neves/webpack-merge-plus)
[![npm](https://img.shields.io/npm/v/webpack-merge-plus.svg)]()
# Webpack Merge Plus

Extends webpack-merge to handle nested arrays and functions, recursively

## Usage

This `webpack.config.js` can configure itself based on already defined attributes. See **publicPath** for example, it's based on **devtool** been set or not and use **devServer** *host* and *port* to build the url.

```javascript
module.exports = require('mergePlus')([
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
```

You can run from example folder as `webpack --config example/webpack.config.single-file.js`

This makes more sense when splitted in multiple files. Check [example](https://github.com/neves/webpack-merge-plus/tree/master/example) folder for a sample.

## Installation

### Using npm

`npm i -D webpack-merge-plus`

### Using yarn

`yarn add -D webpack-merge-plus`

## Tests

This project uses [Jest](https://facebook.github.io/jest/) for testing.

After cloning and installing dependencies using *yarn* or *npm*, just run `npm test`.

## Contribution

You're free to contribute to this project by submitting [issues](https://github.com/neves/webpack-merge-plus/issues) and/or [pull requests](https://github.com/neves/webpack-merge-plus/pulls). This project is test-driven, so keep in mind that every change and new feature should be covered by tests. Your name will be added to the hall of fame ;)

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
