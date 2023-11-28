const common = require("./babel.config");
module.exports = {
  ...common,
    plugins: [
      ["@babel/plugin-transform-modules-commonjs", {
        "allowTopLevelThis": true
      }],
      ...common.plugins
    ]
  };
  