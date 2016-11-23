module.exports = ({context}) => {
  return {
    entry: './main.js',
    output: {
      path: context + '/dist',
      filename: 'index.js'
    }
  }
}
