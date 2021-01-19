const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const MONACO_DIR = path.resolve(__dirname, './node_modules/monaco-editor');

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css'],
    mainFields: ['main', 'module', 'browser'],
  },
  entry: './src/index.js',
  target: 'electron-renderer',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/, include: MONACO_DIR, use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ttf$/,
        use: ['file-loader'],
      },
      {
        test: /\.js|ts|tsx|jsx$/, // previously /\.(js|ts|tsx|jsx)$/
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist/renderer'),
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 4000,
    publicPath: '/',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  plugins: [new HtmlWebpackPlugin(), new MonacoWebpackPlugin()],
};
