const isDev = process.env.NODE_ENV === "development";

const targets = isDev
  ? { chrome: 75, node: 14 }
  : {
      node: 14,
      edge: 14,
      firefox: 45,
      chrome: 49,
      safari: 10,
    };

const presets = [
  [
    require.resolve("@babel/preset-env"),
    {
      targets,
      loose: false,
      useBuiltIns: "usage",
      corejs: { version: 2, proposals: true },
    },
  ],
  require.resolve("@babel/preset-react"),
];

const plugins = [
  [require.resolve("babel-plugin-styled-components"), { displayName: isDev }],
  require.resolve("@babel/plugin-syntax-dynamic-import"),
  [require.resolve("@babel/plugin-proposal-class-properties"), { loose: false }],
  require.resolve("@babel/plugin-transform-runtime"),
];

module.exports = {
  plugins,
  presets,
};
