const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: {
      keep: /index.html|normalize.css/,
    },
  },
  devtool: "inline-source-map",
  plugins: [],
  module: {
    rules: [],
  },
};
