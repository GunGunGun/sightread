module.exports = {
  mode: "development",
  optimization: {
    minimizer: [],
    minimize: false,
    minify: false,
    splitChunks: {
        chunks: 'all',
        name: true
    },
    runtimeChunk: true
  },
};
