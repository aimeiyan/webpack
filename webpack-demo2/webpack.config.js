var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name]-bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: path.resolve(__dirname, "src"),
                exclude: path.resolve(__dirname, "node_modules"),
                query: {
                    presets: "latest"  //已经在package.json中指定了
                }
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader?importLoaders=1!postcss-loader"  //  打包css时用加，打包less时不用加 "?importLoaders=1"，处理css文件中的@import
            }, {
                test: /\.less$/,
                loader: "style-loader!css-loader!postcss-loader!less-loader"
            }, {
                test: /\.scss/,
                loader: "style-loader!css-loader!postcss-loader!sass-loader"
            }, {
                test: /\.html$/,
                loader: "html-loader"
            }, {
                test: /\.tpl$/,
                loader: "ejs-loader"
            }, {
                test: /\.(png||jpg||gif)$/,
                //loader: "file-loader",
                loader: "url-loader",
                query:{
                    limit:200000,
                    name:'assets/[name]-[hash:5].[ext]'
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
            title:'this is index'
        })
    ]
};