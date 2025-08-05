const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('../../package.json').dependencies;

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    port: 3002, // Puerto para el MFE de autenticación
    open: true,
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
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfeAuth', // Nombre único para tu MFE
      filename: 'remoteEntry.js', // Archivo de entrada para el contenedor
      exposes: {
        // Módulos que este MFE comparte
        './Login': './src/Login',
      },
      shared: {
        react: { singleton: true, requiredVersion: deps.react },
        'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
