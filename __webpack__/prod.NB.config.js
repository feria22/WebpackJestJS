const common = require("./common.config.js");
const optimization = require("./commonParts/optimization.js");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = [
new MiniCssExtractPlugin({
    filename: "styles.css",
}),
];

//   prod.plugins.MiniCssExtractPlugin.filename="styles.css";
module.exports={
    ...common,
    mode: "production",
    target: "browserslist",
    devtool: false,
    plugins:[...common.plugins,...plugins],
    output: {
        ...common.output,
        filename: "script.js",
    }, 
    module:{...common.module,
    rules:[
        ...common.module.rules,
        {
            test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
            type: "asset/resource",
            generator: {
                filename: "assets/img/[name][ext]",
            },
            },
            // --- FONTS
            {
            test: /\.(woff2?|eot|ttf|otf)$/i,
            exclude: /node_modules/,
            type: "asset/resource",
            generator: {
                filename: "assets/fonts/[name][ext]",
            },
            },
    ] 
    },
    optimization
};