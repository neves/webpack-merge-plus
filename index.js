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
  a = convert(a, {})
  b = convert(b, a)

  return merge(a, b)
}

function convert (item, before) {
  if (isFunction(item)) {
    item = item(before)
  }

  if (Array.isArray(item)) {
    item = mergeArray(before, item)
  }

  return item
}

function isFunction (f) {
  return f instanceof Function
}
