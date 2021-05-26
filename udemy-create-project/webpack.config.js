const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const development = require("./webpack/development");

// const { merge } = require("webpack-merge");
// const commonConfiguration = require("./webpack/common");

// module.exports = (_env, { mode }) => {
//   const properlyConfig = require(`./webpack/${mode}`);
//   const mergeConfig = merge(commonConfiguration, properlyConfig);
//   return mergeConfig;
// };

const devMode = process.env.NODE_ENV !== "production";
const SRC_DIR = __dirname + "/src";
const DIST_DIR = __dirname + "/dist";
const SRC_html = __dirname + "/public";

module.exports = {
  mode: { development },
  entry: `./src/store/index.js`,
  output: {
    path: DIST_DIR,
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(scss|sass|css)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[local]___[hash:base64:5]",
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {
          loader: "html-loader",
          options: { minimize: true },
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: SRC_html + "/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
    }),
  ],
  devServer: {
    contentBase: SRC_html,
    hot: true,
    port: 3000,
  },
};
