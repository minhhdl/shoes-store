const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = withSass({
  cssModules: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.css$/,
      include: /node_modules/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
              modules: false,
          },
        },
        {
          loader: 'postcss-loader',
        },
      ],
    });

    const extractGlobalCSSPlugin = new MiniCssExtractPlugin({
      filename: 'static/vendor.css',
    });
    config.plugins.push(extractGlobalCSSPlugin);

    return config;
  },
});
