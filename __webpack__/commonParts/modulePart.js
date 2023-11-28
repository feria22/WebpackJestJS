const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const modulePart= {
    strictExportPresence: true, // Strict mod to avoid of importing non-existent objects
    rules: [
      // --- JS | TS USING BABEL
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true, // Using a cache to avoid of recompilation
          },
        },
      },
      // --- HTML
      { test: /\.html$/, use: ["html-loader"] },
      // --- S/A/C/SS
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          // This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. 
          //It supports On-Demand-Loading of CSS and SourceMaps.
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader", // translates css into CommonJS
            options: {
              esModule: true,
              // css modules
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]", // format of output
                namedExport: true, // named exports instead of default
              },
            },
          },
          {
            // autoprefixer
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      // --- S/A/SS
      {
        test: /\.(s[ac])ss$/i,
        use: ["sass-loader"],
      },
      // --- IMG
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[hash][ext]",
        },
      },
      // --- FONTS
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash][ext]",
        },
      },
    ],
  }
  module.exports=modulePart