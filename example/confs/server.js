module.exports = ({output}) => {
  return {
    devServer: {
      contentBase: output.path,
      host: '0.0.0.0',
      port: 4000
    }
  }
}
