const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./docsrc",
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  output: {
    path: path.resolve("docs"),
    filename: "[name].[chunkhash:5].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("docsrc/index.html"),
      minify: { collapseWhitespace: true, removeComments: true }
    }),
    new CleanWebpackPlugin()
  ]
};
