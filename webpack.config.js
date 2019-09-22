var webpack = require('webpack');

module.exports = {
  entry: "./server.ts",
  output: {
    libraryTarget: "umd",
    publicPath: './build/',
    filename: "bundle.js",
    path: __dirname + "/build"
  },

  target: 'node',
  node: {
    __dirname: false
  },

  plugins: [
  ],

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  externals: {
    'core-js/fn/object/assign' : 'commonjs core-js/fn/object/assign',
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ],
  }
};