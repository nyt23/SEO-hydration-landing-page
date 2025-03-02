const path = require('path');

module.exports = {
  module: {
    rules: [
      // Rule for handling SVGs
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images',
              publicPath: 'images',
            },
          },
          {
            loader: 'svgo-loader', // Optimize SVGs
            options: {
              plugins: [
                { removeTitle: true }, // Remove <title> tags
                { removeViewBox: false }, // Keep viewBox attribute
                { removeDimensions: true }, // Remove width/height attributes
              ],
            },
          },
        ],
      },,
    ],
  },
  entry: {
    app: './js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/app.js',
  },
};
