const merge = require('../index')

test('behave like webpack-merge', () => {
  a = {foo: 'foo'}
  b = {bar: 'bar'}
  result = {foo: 'foo', bar: 'bar'}

  expect(merge(a, b)).toEqual(result)
})

test('run functions', () => {
  a = () => {
    return {foo: 'foo'}
  }
  b = () => {
    return {bar: 'bar'}
  }
  result = {foo: 'foo', bar: 'bar'}

  expect(merge(a, b)).toEqual(result)
})

test('pass merged into function', () => {
  a = {foo: 'foo'}

  b = (a) => {
    return {bar: a.foo}
  }
  result = {foo: 'foo', bar: 'foo'}

  expect(merge(a, b)).toEqual(result)
})

test('merge nested array', () => {
  a = [
    [
      {foo: 'foo'},
      {a: 'a'}
    ],
    {bar: 'bar'}
  ]

  b = [
    {jon: 'jon'},
    [
      {doo: 'doo'},
      {b: 'b'}
    ]
  ]
  result = {foo: 'foo', a: 'a', bar: 'bar', jon: 'jon', doo: 'doo', b: 'b'}

  expect(merge(a, b)).toEqual(result)
})

test('merge nested array with function', () => {
  a = [
    [
      {foo: 'foo'},
      {a: 'a'},
      merged => { return {f: merged} }
    ],
    {bar: 'bar'}
  ]

  b = [
    {jon: 'jon'},
    [
      {doo: 'doo'},
      {b: 'b'}
    ]
  ]
  result = {foo: 'foo', a: 'a',
            f: {foo: 'foo', a: 'a'},
            bar: 'bar', jon: 'jon', doo: 'doo', b: 'b'}

  expect(merge(a, b)).toEqual(result)
})

test('function that returns array', () => {
  a = () => {
    return [
      [
        {foo: 'foo'},
        {a: 'a'},
        merged => { return {f: merged} }
      ],
      {bar: 'bar'}
    ]
  }

  b = [
    {jon: 'jon'},
    [
      {doo: 'doo'},
      {b: 'b'}
    ]
  ]

  result = {foo: 'foo', a: 'a',
            f: {foo: 'foo', a: 'a'},
            bar: 'bar', jon: 'jon', doo: 'doo', b: 'b'}

  expect(merge(a, b)).toEqual(result)
})

test('single nested array', () => {
  a = [[{foo: 'foo'}]]
  result = {foo: 'foo'}

  expect(merge(a)).toEqual(result)
})

test('merge siblings', () => {
  a = [{foo: 'foo'}, [m => [{bar: m.foo}]]]
  result = {foo: 'foo', bar: 'foo'}
  expect(merge(a)).toEqual(result)
})

test('bug: merging twice and duplicating sub-array', () => {
  list = [{plugins: [1]}, []]
  result = {plugins: [1]}
  expect(merge(list)).toEqual(result)
})

test('first item is array', () => {
  list = [() => [{plugins: [1]}, {plugins: [2]}], [{plugins: [3]}]]
  result = {plugins: [1, 2, 3]}
  expect(merge(list)).toEqual(result)
})

test.skip('example', () => {
  const config = require('./example/webpack.config')
  expect(config.output.publicPath).toBe('http://0.0.0.0:4000/')
})
