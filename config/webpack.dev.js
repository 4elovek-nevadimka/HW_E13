const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    output: {
        filename: 'main.js',
    },
    devServer: {
        static: './dist',
        hot: true,
        port: 3001,
    },
    stats: {
        children: false,
    },
    devtool: 'inline-source-map',
};