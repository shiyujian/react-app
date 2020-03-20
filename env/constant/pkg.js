/**
 * 梳理完成 可供使用
 */

const { name, version, description, theme } = require('../../package.json');

exports.name = name; // 完成
exports.version = version; // 完成
exports.description = description; // 完成
exports.theme = theme; // 完成

exports.vendors = [ // 完成
    'react',
    'react-redux',
    'react-router',
    'react-router-redux',
    'redux',
    'redux-actions',
    'redux-thunk',
    'react-fa',
    'antd',
    'moment'
];

exports.externals = { // 完成
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContent': true,
    'react/addons': true,
    'jquery': 'window.jQuery'
}