/**
 * 梳理完成 对应无误 可供使用
 * 下属
 * constant/env 文件 完成 i-m-d
 * config/common 文件 完成
 */
const {HotModuleReplacementPlugin, DefinePlugin, optimize} = require('webpack'); // 完成
const CommonsChunkPlugin = optimize.CommonsChunkPlugin; // 完成
const merge = require('webpack-merge'); // 完成
const { DIST, APP, vendors, HMR } = require('../constant/path'); // 完成
const { define } = require('../constant/env'); // 完成
const commonConfig = require('./common'); // 完成

console.log('此处之前没问题');
module.exports = merge(commonConfig, {
    entry: {
        app: [APP, HMR], // 完成
        vendor: vendors // 完成 vendors找不到
    },
    output: {
        filename: `[name].[hash].js`, // 完成
        path: DIST
    },
    plugins: [
        new DefinePlugin(define(process.env.proj)), //完成 process 找不到
        new HotModuleReplacementPlugin(), // 完成
        new CommonsChunkPlugin({ // 完成
            names: ['vendor']
        })
    ]
});