/**
 * 梳理完成，可供使用
 * 下属：
 * constant/pkg 文件 完成
 * constant/path 文件 完成
 */



const HtmlWebpackPlugin = require('html-webpack-plugin'); // 完成
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 完成
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin'); // 完成
const CopyWebpackPlugin = require('copy-webpack-plugin'); // 完成
const autoprefixer = require('autoprefixer'); // 完成

const {
    SRC, //完成
    DIST, // 完成
    NODE_MODULES, // 完成
    APP, // 完成
    THEME, // 完成
    TEMPLATE, // 完成
    FAVICON // 完成
} = require('../constant/path');
const {
    description, // 完成
    verdors, // 完成
    externals // 完成
} = require('../constant/pkg');

const themeConfig = require(THEME); // 完成
console.log('此处之前没问题1');
module.exports = {
    target: 'web', // 完成
    devtool: 'cheap-module-eval-source-map', // 完成
    entry: {
        app: APP, // 完成
        verdor: verdors // 完成
    },
    context: SRC, // 完成
    output: {
        filename: `[name].[hash].js`, // 完成
        path: DIST, // 完成
        publicPath: '/' // 完成
    },
    module: {
        // rules: [
        //     { // 完成
        //         test: /\.(js|jsx)$/,
        //         include: SRC,
        //         use: [
        //             {
        //                 loader: 'babel-loader'
        //             }
        //         ]
        //     },
        //     { // 完成
        //         test: /\.css$/,
        //         include: SRC,
        //         use: ExtractTextPlugin.extract({
        //             fallback: 'style-loader',
        //             use: [
        //                 'css-loader?localIdentName=[local]--[hash:base64:5]&modules',
        //                 {
        //                     loader: 'postcss-loader',
        //                     options: {
        //                         ident: 'postcss',
        //                         plugins: () => [
        //                             require('postcss-flexbugs-fixes'),
        //                             autoprefixer({
        //                                 browsers: [
        //                                     '>1%',
        //                                     'last 4 versions',
        //                                     'Firefox ESR',
        //                                     'not ie < 9'
        //                                 ],
        //                                 flexbox: 'np-2009'
        //                             })
        //                         ]
        //                     }
        //                 }
        //             ],
        //             publicPath: 'css/'
        //         })
        //     },
        //     { // 完成
        //         test: /\.less$/,
        //         include: SRC,
        //         use: [
        //             'style-loader',
        //             'css-loader',
        //             {
        //                 loader: 'postcss-loader',
        //                 options: {
        //                     ident: 'postcss',
        //                     plugins: () => [
        //                         require('postcss-flexbugs-fixes'),
        //                         autoprefixer({
        //                             browsers: [
        //                                 '>1%',
        //                                 'last 4 versions',
        //                                 'Firefox ESR',
        //                                 'not ie < 9'
        //                             ],
        //                             flexbox: 'np-2009'
        //                         })
        //                     ]
        //                 }
        //             },
        //             'less-loader'
        //         ]
        //     },
        //     { // 完成
        //         test: /\.css$/,
        //         include: NODE_MODULES,
        //         use: ['style-loader', 'css-loader']
        //     },
        //     { // 完成
        //         test: /\.less$/,
        //         include: NODE_MODULES,
        //         use: [
        //             'style-loader',
        //             'css-loader',
        //             'postcss-loader',
        //             `less-loader?{'modifyVars':${JSON.stringify(
        //                 themeConfig()
        //             )}}`
        //         ]
        //     },
        //     { // 完成
        //         test: /\.(png|jpe?g|gif|ttf)$/,
        //         include: SRC,
        //         use: [
        //             {
        //                 loader: 'url-loader',
        //                 options: {
        //                     limit: 8192,
        //                     name: 'images/[name].[hash].[ext]'
        //                 }
        //             }
        //         ]
        //     },
        //     { // 完成
        //         test: /\.(png|jpe?g|gif|ttf)$/,
        //         include: NODE_MODULES,
        //         use: [
        //             {
        //                 loader: 'url-loader',
        //                 options: {
        //                     limit: 8192,
        //                     name: 'images/[name].[hash].[ext]'
        //                 }
        //             }
        //         ]
        //     },
        //     { // 完成
        //         test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        //         include: NODE_MODULES,
        //         use: [
        //             {
        //                 loader: 'file-loader',
        //                 options: {
        //                     limit: 8192,
        //                     name: 'fonts/[hash].[ext]'
        //                 }
        //             }
        //         ]
        //     }
        // ]
    },
    plugins: [
        // new HtmlWebpackPlugin({ // 完成
        //     title: description, // 完成
        //     template: TEMPLATE, // 完成
        //     hash: false, // 完成
        //     favicon: FAVICON,  // 完成
        //     filename: 'index.html', // 完成
        //     inject: 'body' // 完成
        // }),
        // new HtmlWebpackIncludeAssetsPlugin({ // 完成
        //     assets: [
        //         'config.js' // 完成
        //     ],
        //     append: false, // 完成
        //     hash: true // 完成
        // }),
        // new CopyWebpackPlugin([ // 完成
        //     {
        //         from: `../static/DeathCode_${process.env.proj}.js`,
        //         to: 'DeathCode.js'
        //     }
        // ]),
        // new ExtractTextPlugin('css/[name].[contenthash].css') // 完成
    ],
    resolve: {
        modules: ['src', 'node_modules'], // 完成
        extensions: ['.js', '.json', '.jsx', '.react.js'] // 完成
    },
    externals // 完成
}