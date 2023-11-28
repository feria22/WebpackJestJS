const path = require("path");

const BUILD_DIR = path.resolve(__dirname, "..","..", "build");
const PUBLIC_DIR = path.resolve(__dirname, "..","..",  "public");
const STATIC_DIR = path.resolve(__dirname, "..","..",  "static");
module.exports={BUILD_DIR,PUBLIC_DIR,STATIC_DIR,path}