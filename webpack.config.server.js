const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server.js',
  target: 'node',

  mode: 'production',

  externals: [nodeExternals()],

  output: {
    path: `${__dirname}/build`,
    filename: 'server.js',
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    }],
  },
};
