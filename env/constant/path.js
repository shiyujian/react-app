/**
 * 对应
 */
const { resolve } = require('path'); // 完成
const { theme } = require('./pkg'); // 完成
const { HOST } = require('./host'); // 完成

const BASE = resolve(__dirname, '..', '..'); // 完成
const SRC = resolve(BASE, 'src'); // 完成
const NODE_MODULES = resolve(BASE, 'node_modules'); // 完成
const STATIC = resolve(BASE, 'static'); // 完成
const TEST = resolve(BASE, 'tests'); // 完成 未用
const DIST = resolve(BASE, `dist/dist_${process.env.proj}`); // 完成

exports.BASE = BASE; // 完成 未用
exports.SRC = SRC; // 完成 未用
exports.DIST = DIST; // 完成
exports.NODE_MODULES = NODE_MODULES; // 完成
exports.APP = resolve(SRC, 'index.js'); // 完成
exports.THEME = resolve(BASE, theme); // 完成

exports.STATIC = STATIC; // 完成
exports.TEMPLATE = resolve(STATIC, 'template.html'); // 完成
exports.FAVICON = resolve(STATIC, `favicon_${process.env.proj}.ico`); // 完成

exports.HMR = `webpack-host-middleware/client?path=${HOST}__webpack_hmr`; // 完成

exports.TEST = TEST; // 完成 未用
