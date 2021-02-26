module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: ["url-loader"],
      },
    ],
  },
  devServer: {
    contentBase: "./dist/",
    port: 9000,
  },
};
