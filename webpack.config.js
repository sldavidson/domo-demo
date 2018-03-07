const path = require('path');
const { Proxy } = require('@domoinc/ryuu-proxy');
const manifest = require('./manifest.json');
const proxy = new Proxy(manifest);

module.exports = {
  // where's the main js file
  entry: path.join(__dirname, 'src', 'index'),

  // where to put bundled files
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    // Tells Webpack how to load other file extensions other than .js
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },

      // be sure to add babel if you're wanting to use ES6 JS syntax
    ],
  },


  // create source map for easier debugging during development
  devtool: 'source-map',

  // dev server config
  devServer: {
    before: app => app.use(proxy.express()),
    publicPath: '/dist/',
    hot: false,
    inline: false,
    noInfo: true,
  }
};