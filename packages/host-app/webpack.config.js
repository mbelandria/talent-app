const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const deps = require('../../package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: '.',
          globOptions: {
            ignore: ['**/index.html'],
          },
          noErrorOnMissing: true, // para evitar errores si no hay otros archivos
        },
      ],
    }),
    new ModuleFederationPlugin({
      remotes: {
        mfeAuth: 'mfeAuth@http://localhost:3002/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, requiredVersion: deps.react },
        'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
        'react-router-dom': {
          singleton: true,
          requiredVersion: deps['react-router-dom'],
        },
        zustand: { singleton: true, requiredVersion: deps.zustand },
        'common-state': { singleton: true, requiredVersion: '1.0.0' },
      },
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
      publicPath: '/',
    },
    port: 3001,
    open: true,
    historyApiFallback: true,
  },
  mode: 'development',
};
