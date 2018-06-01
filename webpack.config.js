var path = require("path");
var webpack = require("webpack");

var plugins = [];
var devPlugins = [];

var prodPlugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
)

module.exports = {
  entry: path.join(__dirname, "frontend", "hop_starter.jsx"),
  output: {
    path: path.join(__dirname, "app", "assets", "javascripts"),
    filename: "[name].bundle.js"
  },
  plugins: plugins,
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react']
          }
        },
        exclude: /node_modules/
      }
    ]
  }
};
