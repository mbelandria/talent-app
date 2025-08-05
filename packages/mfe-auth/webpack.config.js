const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    port: 3001, // Puerto para el MFE de autenticación
    open: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
        },
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
        // Dependencias compartidas para evitar duplicados en el contenedor
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
