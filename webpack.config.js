const path = require('path');

const dev = process.env.NODE_ENV === "dev"



let config = {
  entry: './assets/js/app.js',
  watch: dev,
  mode: 'production',
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

if (dev) {
  config.mode = "development"
}

module.exports = config