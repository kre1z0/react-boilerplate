const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const { staticPath, entry, assets } = require("./paths");

module.exports = (...args) =>
  merge(common(...args), {
    entry: [entry],
    output: {
      publicPath: "/",
      assetModuleFilename: `${assets}/[hash][ext][query]`,
    },
    plugins: [
      new CleanWebpackPlugin({
        verbose: true,
        dry: false,
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: staticPath,
        reportFilename: "report.html",
        defaultSizes: "gzip",
        statsOptions: {
          all: true,
        },
        openAnalyzer: false,
      }),
    ],
    optimization: {
      minimize: true,
      /** https://webpack.js.org/plugins/terser-webpack-plugin/ **/
      minimizer: [new TerserPlugin()],
    },
  });
