
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const optimization= {
    usedExports: false,
    minimize: true, // Affects Terser Plugin
    minimizer: [
        new TerserPlugin({
            terserOptions: {
            mangle: false,
            compress: {
                drop_console: true,
                drop_debugger:true,
            },
            output: {
                beautify: false,
                comments: false,
            },
            },
            extractComments: true,
        }),
        new ImageMinimizerPlugin({
        minimizer: {
            implementation: ImageMinimizerPlugin.sharpMinify,
            options: {
            encodeOptions: {
                jpeg: {
                // https://sharp.pixelplumbing.com/api-output#jpeg
                quality: 80,
                },
                webp: {
                // https://sharp.pixelplumbing.com/api-output#webp
                lossless: true,
                },
                avif: {
                // https://sharp.pixelplumbing.com/api-output#avif
                lossless: true,
                },

                // png by default sets the quality to 100%, which is same as lossless
                // https://sharp.pixelplumbing.com/api-output#png
                png: {},

                // gif does not support lossless compression at all
                // https://sharp.pixelplumbing.com/api-output#gif
                gif: {},
            },
            },
        },
        }),
        // new ImageMinimizerPlugin({
        //     minimizer: {
        //     implementation: ImageMinimizerPlugin.imageminMinify,
        //     options: {
        //         // Lossless optimization with custom option
        //         // Feel free to experiment with options for better result for you
        //         plugins: [
        //         ["gifsicle", { interlaced: true }],
        //         ["jpegtran", { progressive: true }],
        //         ["optipng", { optimizationLevel: 5 }],
        //         // Svgo configuration here https://github.com/svg/svgo#configuration
        //         [
        //             "svgo",
        //             {
        //             plugins: [
        //                 {
        //                 name: "preset-default",
        //                 params: {
        //                     overrides: {
        //                     removeViewBox: false,
        //                     addAttributesToSVGElement: {
        //                         params: {
        //                         attributes: [
        //                             { xmlns: "http://www.w3.org/2000/svg" },
        //                         ],
        //                         },
        //                     },
        //                     },
        //                 },
        //                 },
        //             ],
        //             },
        //         ],
        //         ],
        //     },
        //     },
        // }),
    ],
};
module.exports=optimization;