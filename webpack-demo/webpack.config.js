/**
 * Created by cdn on 2018/3/21.
 */
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        //相对路径转化为绝对路径(from,to) 它可以接受多个参数，依次表示所要进入的路径，
        // 直到将最后一个参数转为绝对路径。如果根据参数无法得到绝对路径，就以当前所在路径作为基准。
        // 除了根目录，该方法的返回值都不带尾部的斜杠。
        path: path.resolve(__dirname, 'dist/js')
    }
};