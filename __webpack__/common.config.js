const devServer = require("./commonParts/devServer");
const plugins = require("./commonParts/plugins");
const modulePart = require("./commonParts/modulePart");
const {BUILD_DIR,path} = require("./commonParts/folders");


module.exports = {
  devServer,
  plugins,
  entry: path.join(__dirname, "..", "src","scripts", "index.ts"),
  output: {
    path: BUILD_DIR,
    /**
     * Helps to avoid of MIME type ('text/html') is not a supported stylesheet
     * And sets address in html imports
     */
    publicPath: "/",
  },
  // Checking the maximum weight of the bundle is disabled
  performance: {
    hints: false,
  },
  // Modules resolved
  resolve: {
    extensions: [".ts", ".js",".jsx",".tsx"],
  },
  
  module:modulePart
};
