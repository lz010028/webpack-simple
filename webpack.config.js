const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    devtool: "source-map", // dev
    // devtool: "cheap-module-source-map", // 线上
    entry: {
        main: './src/index.js',
        sub: './src/index.js',
    },
    devServer: {
        contentBase: './dist',
        open: true,
        port: 8080,
        hot: true, /* 热更新 */
        hotOnly: true /* 即使 hmr 的功能没有实现，也不自动刷新浏览器刷新页面 */
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]', // placeholder 占位符
                        outputPath: 'images',
                        limit: 20480
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'}, // 将 css 文件挂在到 HTML 页面
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2, // 通过 import 引入的 scss 也许要走 sass-loader 和 postcss-loader
                            // modules: true,
                        },
                    }, // 分析 css 文件的引用关系
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'}, // 将 css 文件挂在到 HTML 页面
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2, // 通过 import 引入的 scss 也许要走 sass-loader 和 postcss-loader
                            // modules: true,
                        },
                    }, // 分析 css 文件的引用关系
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff)$/,
                use: {
                    loader: 'file-loader',
                    options: {}
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    "presets": ["@babel/preset-env", {
                        useBuiltIns: "usage" // 更具业务代码添加兼容代码
                    }]
                }
            }, /* ES6 支持 */
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin() /* 开启 hmr */
    ],
    output: {
        // publicPath: "http://cdn.com.cn", // 增加资源文件公共前缀
        publicPath: "/",
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}
