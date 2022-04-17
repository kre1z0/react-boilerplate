const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  entry: resolve("../src/index.tsx"),
  src: resolve("../src"),
  template: resolve("../src/index.html"),
  dist: resolve("../dist"),
  nodeModules: resolve("../node_modules"),
  staticPath: "static",
  public: resolve("../public"),
  assets: process.env.NODE_ENV === "development" ? "" : "static/assets",
  env: resolve("../.env"),
};
