const merge = require('webpack-merge').smart

module.exports = function () {
  return merge.apply(null, arguments)
}
