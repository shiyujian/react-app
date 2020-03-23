/**
 * Copyright (c) 2016-present, ecidi.
 * All rights reserved.
 *
 * This source code is licensed under the GPL-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const express = require('express');
const webpack = require('webpack');
const history = require('connect-history-api-fallback');
const compress = require('compression');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('../config/dev');
const { DIST } = require('../constant/path');

const app = express();
// 默认访问index.html
app.use(history());
// 使用压缩
app.use(compress());
// 网络包
const compiler = webpack(config);

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath, // 中间件绑定的公共路径
        contentBase: DIST,
        hot: true,
        quiet: false,
        noInfo: false,
        lazy: false, // 重新请求时编译
        stats: {
            chunks: false,
            chunkModules: false,
            colors: true
        }
    })
);
app.use(webpackHotMiddleware(compiler)); // 使用热加载

app.use(express.static(DIST)); // 提供对静态文件对服务

module.exports = app;
