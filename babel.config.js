module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  // Potential use for SCSS
  plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
};
