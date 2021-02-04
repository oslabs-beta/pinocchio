// const webpack = require("webpack");

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
    // ['react-app', { runtime: 'automatic' }],
  ],
  // Potential use for SCSS
  plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
};
