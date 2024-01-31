const path = require('path');

module.exports = {
  entry: ['./src/index.js', "./src/css/style.scss"],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
        Images: path.resolve(__dirname, 'src/css/assets')
    }
  },
  module: {
    rules: [
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[name][ext][query]',
          },  
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [],
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          type: "asset/resource",
          generator: {
            filename: "style.css",
          },
          use: [
            {
              loader: "sass-loader",
              options: {
                additionalData: `
                  @import 'base/normalize.css';
                  @import 'base/reset.css';
                `,
              },
            },
          ],
        },
      ],
    }
};