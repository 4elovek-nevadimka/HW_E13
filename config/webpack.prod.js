const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
        }),
    ],
    output: {
        filename: 'main.js',
    },
    devServer: {
        static: './dist',
        hot: false,
        port: 3001,
    },
    stats: {
        children: false,
    },
};