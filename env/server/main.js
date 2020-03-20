/**
 * 梳理完成，对应无误，可供使用
 * 下属：
 * config/dev文件 完成 i-m
 * constant/path文件 i-m
 */
const express = require('express'); // 完成
const webpack = require('webpack'); // 完成
const history = require('connect-history-api-fallback'); // 完成
const compress = require('compression'); // 完成
const webpackDevMiddleware = require('webpack-dev-middleware'); // 完成
const webpackHotMiddleware = require('webpack-hot-middleware'); // 完成

const config = require('../config/dev'); // 完成
const DIST = require('../constant/path'); // 完成

const app = express(); // 完成
app.use(history()); // 完成
app.use(compress()); // 完成

const compiler = webpack(config); // 完成
console.log('此处之后没问题');

// app.use(
//     webpackDevMiddleware(compiler, { // 完成
//         publicPath: config.output.publicPath, // 完成 publicPath不存在
//         contentBase: DIST, // 完成
//         hot: true,
//         quiet: false,
//         noInfo: false,
//         lazy: false,
//         stats: {
//             chunks: false,
//             chunkModules: false,
//             colors: true
//         }
//     })
// );
// app.use(webpackHotMiddleware(compiler)); // 完成

// app.use(express.static(DIST)); // 完成

module.exports = app; // 完成