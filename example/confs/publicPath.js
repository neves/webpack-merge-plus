module.exports = ({devtool, devServer}) => {
  return {
    output: {
      publicPath: devtool ? `http://${devServer.host}:${devServer.port}/` : '/'
    }
  }
}
