const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const { DuplicatesPlugin } = require("inspectpack/plugin");

const { entry } = require("./paths");

const port = 9000;

module.exports = (...args) =>
  merge(common(...args), {
    entry: {
      app: [entry],
    },
    devtool: "eval-source-map",
    plugins: [
      new CircularDependencyPlugin({
        // exclude detection of files based on a RegExp
        exclude: /a\.js|node_modules/,
        // add errors to webpack instead of warnings
        failOnError: false,
        // allow import cycles that include an asynchronous import,
        // e.g. via import(/* webpackMode: "weak" */ './file.js')
        allowAsyncCycles: false,
        // set the current working directory for displaying module paths
        cwd: process.cwd(),
      }),
      new DuplicatesPlugin(),
    ],
    devServer: {
      historyApiFallback: true,
      hot: false,
      liveReload: false,
      port,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
      },
      allowedHosts: [`.localhost:${port}`, `localhost:${port}`],
    },
  });
