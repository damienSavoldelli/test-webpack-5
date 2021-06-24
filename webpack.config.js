const path = require('path');

module.exports = {
  entry: './assets/js/app.js',
  watch: true,
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "browsers": ["> 0.25%, not dead", "last 5 versions", "safari >= 7"]
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  }  
}