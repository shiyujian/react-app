/**
 * Copyright (c) 2016-present, ecidi.
 * All rights reserved.
 *
 * This source code is licensed under the GPL-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {HotModuleReplacementPlugin, NoErrorsPlugin, DefinePlugin, optimize} = require('webpack');
const CommonsChunkPlugin = optimize.CommonsChunkPlugin;
const merge = require('webpack-merge');
const {DIST, APP, vendors, HMR} = require('../constant/path');
const {HOST} = require('../constant/host');
const {define} = require('../constant/env');
const commonConfig = require('./common');

console.log('start ...');
module.exports = merge(commonConfig, {
    entry: {
        app: [APP, HMR],
        vendor: vendors // vendors为undefined
    },
    output: {
        path: DIST,
        filename: `[name].[hash].js`
    },
    plugins: [
        new DefinePlugin(define(process.env.proj)), // 配置环境变量__env__
        new HotModuleReplacementPlugin(), // 启用热替换
        new CommonsChunkPlugin({ // 提取公共代码，提升应用加载效率
            names: ['vendor']
        })
    ]
});
