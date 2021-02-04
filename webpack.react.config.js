const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

const MONACO_DIR = path.resolve(__dirname, "./node_modules/monaco-editor");
const REACT_TOASTIFY_DIR = path.resolve(
  __dirname,
  "./node_modules/react-toastify"
);

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".css"],
    mainFields: ["main", "module", "browser"],
  },
  entry: "./src/index.js",
  target: "electron-renderer",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [MONACO_DIR, REACT_TOASTIFY_DIR],
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ttf$/,
        use: ["file-loader"],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            // disable typescript issues on build
            options: { happyPackMode: true },
          },
        ],
      },
      {
        test: /\.js|ts|tsx|jsx$/, // previously /\.(js|ts|tsx|jsx)$/
        exclude: /node_modules/,
        use: "babel-loader",
      },
      // SCSS
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      // Images
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      // SVG
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist/renderer"),
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 4000,
    publicPath: "/",
  },
  output: {
    path: path.resolve(__dirname, "./dist/renderer"),
    filename: "js/index.js",
    publicPath: './'
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Catalyst
      template: "./src/index.html",
    }),
    new MonacoWebpackPlugin(),
  ],
};
