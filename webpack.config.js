var path = require('path')
var webpack = require('webpack')

var build = {
  entry: [
    './example/'
  ],
  output: {
    path: path.join(__dirname, 'example'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.css$/,
        loader: "style!css"
      }
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
  build.stats = {
    assets: false,
    warnings: false
  };
  build.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    }),
  ];
  module.exports = build
} else {
  build.devtool = 'cheap-module-eval-source-map';
  build.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ];
  build.entry.push('webpack-hot-middleware/client');
  module.exports = build
}