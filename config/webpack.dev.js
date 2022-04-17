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
      new DuplicatesPlugin({
        // Emit compilation warning or error? (Default: `false`)
        emitErrors: true,
        // Handle all messages with handler function (`(report: string)`)
        // Overrides `emitErrors` output.
        emitHandler: undefined,
        // List of packages that can be ignored. (Default: `[]`)
        // - If a string, then a prefix match of `{$name}/` for each module.
        // - If a regex, then `.test(pattern)` which means you should add slashes
        //   where appropriate.
        //
        // **Note**: Uses posix paths for all matching (e.g., on windows `/` not `\`).
        ignoredPackages: ["sanitize.css"],
        // Display full duplicates information? (Default: `false`)
        verbose: false,
      }),
    ],
    devServer: {
      historyApiFallback: true,
      hot: false,
      liveReload: false,
      port: process.env.PORT || port,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
      },
      allowedHosts: [`.localhost:${port}`, `localhost:${port}`],
      proxy: {
        "/store/": {
          target: process.env.API_URL,
          changeOrigin: true,
        },
      },
    },
  });
