const path = require("path");
const webpack = require("webpack");

const plugins = [];
const devPlugins = [];

const prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  })
]

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
