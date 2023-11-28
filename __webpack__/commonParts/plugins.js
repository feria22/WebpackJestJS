const webpack = require("webpack");

const {BUILD_DIR,PUBLIC_DIR,STATIC_DIR,path} = require("./folders");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");

const plugins= [
    new HtmlWebpackPlugin({
      template: path.resolve(PUBLIC_DIR, "index.html")
    }),
  
    new FileManagerPlugin({
      events: {
        // Remove build dir
        onStart: {
          delete: [BUILD_DIR],
        },
        onEnd: {
          // Copy static files
          copy: [
            {
              source: STATIC_DIR,
              destination: BUILD_DIR,
            },
          ],
        },
      },
    }),
    //tool that automates the generation of favicons in various sizes and formats from a single source image, 
    //injecting the necessary HTML code into webpack-generated files to ensure proper display across different browsers and devices
    new FaviconsWebpackPlugin({
      logo: path.resolve(PUBLIC_DIR, "favicon.svg"),
      prefix: "/favicons/",
      outputPath: path.resolve(BUILD_DIR, "favicons"),
      mode: "webapp",
      // Injecting into all HTML Files or separately (for an every instance of HtmlWebpackPlugin)
      // inject: true,
      inject: (htmlPlugin) =>
        path.basename(htmlPlugin.options.filename) === "index.html",
      favicons: {
        icons: {
          appleIcon: false, // Apple touch icons.
          appleStartup: false, // Apple startup images.
          android: false, // Android homescreen icon.
          favicons: true, // Regular favicons.
          coast: false, // Opera Coast icon.
          firefox: false, // Firefox OS icons.
          windows: false, // Windows 8 tile icons.
          yandex: false, // Yandex browser icon.
        },
      },
      cache: true, // Disallow caching the assets across webpack builds.
    }),
    new webpack.HotModuleReplacementPlugin(), // For page reloading
  ];
  module.exports=plugins;