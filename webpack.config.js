// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: ["./src/index.js", "./src/test.js"],
    // test: './src/test.js'
  }, // file nguon lay tu day (bat dau doc tu day) - không thể tự change khi đổi tên ở đây
  output: {
    filename: " [name].js",
    path: path.resolve(__dirname, "dist"), // sinh ra file bundle nam trong dist
    clean: true, // cách mới clean file rác của webpack
  },
  mode: "development", // Có thể defined mode ở đây hoặc chạy lệnh: npx webpack --mode=development
  // watch: true Tu dong combile hoặc set lệnh build hoặc start trong phần script của package.json
  devServer: {
    // open: true, // "dev": "webpack serve --open" setup -open tương đương với viẹc set open: true
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin,
    new HtmlWebpackPlugin({
      title: "my webpack", // khi run lại sẽ tự động thay đổi title
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.min.css",
    }),
  ],
  // devtool: 'inline-source-map' sử dụng khi các bạn không defined mode
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
