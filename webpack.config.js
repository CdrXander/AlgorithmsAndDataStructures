const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        publicPath: "/",
        contentBase: "./",
        hot: true,
        compress: false,
        port: 1701,
    },
};