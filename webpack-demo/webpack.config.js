/**
 * Created by cdn on 2018/3/21.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/js/index.js',
        print: './src/js/print.js'

    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'output management'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        //相对路径转化为绝对路径(from,to) 它可以接受多个参数，依次表示所要进入的路径，
        // 直到将最后一个参数转为绝对路径。如果根据参数无法得到绝对路径，就以当前所在路径作为基准。
        // 除了根目录，该方法的返回值都不带尾部的斜杠。
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]

            }
        ]
    }
};