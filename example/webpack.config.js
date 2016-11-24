const mergePlus = require('../index.js')

const conf = mergePlus([
  {context: __dirname},
  require('./confs/base'),
  require('./confs/sourceMap'),
  require('./confs/server'),
  require('./confs/publicPath')
])

if (process.env.DEBUG) {
  console.log(JSON.stringify(conf, null, 2))
}

module.exports = conf
