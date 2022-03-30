const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const babelOptions = require("../babel.config");
const { dist, src, nodeModules, staticPath, public: pub, template, assets } = require("./paths");

module.exports = () => {
  return {
    output: {
      path: dist,
      filename: `${staticPath}/js/[name].[hash:7].js`,
      publicPath: "/",
    },

    resolve: {
      modules: [src, nodeModules],
      extensions: [".ts", ".tsx", ".js", "css", ".json"],
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: babelOptions,
          include: src,
        },
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
          options: {
            transpileOnly: true,
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          type: "asset",
          resourceQuery: /url/, // *.svg?url
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ["@svgr/webpack"],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [`file-loader?name=[name].[ext]&outputPath=./${assets}`],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [`file-loader?name=[name].[ext]&outputPath=./${assets}`],
        },
      ],
    },
    plugins: [
      new ESLintPlugin({
        emitError: true,
        emitWarning: true,
        failOnError: true,
        failOnWarning: true,
        cache: true,
        fix: true,
        extensions: [".ts", ".tsx", ".js"],
      }),
      new webpack.ProgressPlugin(),
      new HTMLWebpackPlugin({
        title: "unnamed",
        config: "{{config|safe}}",
        template,
        minify: true,
      }),
      new CopyPlugin({
        patterns: [
          {
            from: pub,
            to: staticPath,
          },
        ],
      }),
    ],
  };
};
