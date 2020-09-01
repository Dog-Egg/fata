const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    doc: "./docsrc"
  },
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
    path: path.resolve("docs")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("docsrc/index.html")
    }),
    new CleanWebpackPlugin()
  ]
};
