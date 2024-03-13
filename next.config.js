const path = require('path');
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
          path: path.resolve(__dirname, 'dist'),
          chunkFilename: "[name].js",
        }
      };
    }
  };
};
