const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', // production/development
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /style\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /style\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{ loader: 'file-loader', options: { esModule: false } }],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css',
      ignoreOrder: false,
    }),
    new CopyPlugin({ patterns: [{ from: 'src/assets', to: 'assets' }] }),
  ],
};
