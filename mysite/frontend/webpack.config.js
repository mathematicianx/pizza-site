const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const BundleTracker = require("webpack-bundle-tracker");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/template.html",
  filename: "index.html",
  inject: "body",
});

module.exports = {
  mode: "development",
  entry: {
    frontend: "./src/index.js",
  },
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist/",
  },
  plugins: [HTMLWebpackPluginConfig],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
