module.exports = (nextConfig) => {
  return {
    ...nextConfig,
    webpack(webpackConfig) {
      return {
        ...webpackConfig,
        optimization: {
          minimize: false
        },
        output: {
          test: /\.(js)$/,
          chunkFilename: "[name].js",
        }
      };
    }
  };
};
