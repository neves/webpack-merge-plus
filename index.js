const merge = require('webpack-merge').smart

module.exports = function () {
  return mergeArray(toArray(arguments))
}

function mergeArray () {
  return toArray(arguments).reduce((a, b) => mergePlus(a, b), {})
}

function toArray (arrayLike) {
  return [].concat.apply([], arrayLike)
}

function mergePlus (a, b) {
  a = callIfFunction(a, {})
  b = callIfFunction(b, a)

  return Array.isArray(b) ? mergeArray(a, b) : merge(a, b)
}

function callIfFunction (item, before) {
  return isFunction(item) ? item(before) : item
}

function isFunction (f) {
  return f instanceof Function
}
