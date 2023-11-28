const {BUILD_DIR,path} = require("./folders");

const devServer = {
    historyApiFallback: true, // Apply HTML5 History API if routes are used
    open: true,
    compress: true,
    allowedHosts: "all",
    hot: true, // Reload the page after changes saved (HotModuleReplacementPlugin)
    client: {
      // Shows a full-screen overlay in the browser when there are compiler errors or warnings
      overlay: {
        errors: true,
        warnings: true,
      },
      progress: true, // Prints compilation progress in percentage in the browser.
    },
  
    port: 3000,
    /**
     * Writes files to output path (default: false)
     * Build dir is not cleared using <output: {clean:true}>
     * To resolve should use FileManager
     */
    devMiddleware: {
      writeToDisk: true,
    },
    static: [
      // Required to use favicons located in a separate directory as assets
      // Should use with historyApiFallback, to avoid of 404 for routes
      {
        directory: path.join(BUILD_DIR, "favicons"),
      },
    ],
  };
module.exports=devServer;