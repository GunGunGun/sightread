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
          test: /\.(js|css)$/,
          filename: "[name].[ext]"
        }
      };
    }
  };
};
