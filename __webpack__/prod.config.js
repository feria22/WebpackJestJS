const { merge } = require("webpack-merge");
const common = require("./common.config.js");
const optimization = require("./commonParts/optimization.js");


const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const plugins = [
  new MiniCssExtractPlugin({
    filename: "[contenthash].css",
  }),
];

module.exports =merge(common, {
  mode: "production",
  target: "browserslist",
  plugins,
  devtool: false,
  output: {
    filename: "[fullhash].js",
  },
  optimization
});
