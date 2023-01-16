const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 設置入口文件
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    // 設置為開發模式
    mode: 'development',
}