const path = require('path');

module.exports = {
  entry: './assets/js/app.js',
  watch: true,
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
}