const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve('src', 'index.jsx')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node:modules/,
                use: [
                    'style-loader'
                ]
            },
            {
                test: /\.css$/,
                exclude: /node:modules/,
                use: [
                    'css-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node:modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    /*optimization: {
        runtimeChunk: 'single',
      },*/
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ]
};