const nesting = require('postcss-nesting');

module.exports = {
  plugins: [
    nesting(), // Enable CSS nesting
    // Other PostCSS plugins
  ],
};
