module.exports = {
  config: {
    optimization: {
      minimizer: [],
      minimize: false,
      minify: false,
      splitChunks: {
          chunks: 'all',
          name: true
      },
      runtimeChunk: true
    }
  },
  compress: false,
}
