const merge = require('./index')

test('behave like webpack-merge', () => {
  a = {foo: 'foo'}
  b = {bar: 'bar'}
  result = {foo: 'foo', bar: 'bar'}

  expect(merge(a, b)).toEqual(result)
})
