
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        tgm: './src/index.jsx'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    resolve: {
        alias: {
            assets: path.resolve(__dirname, 'src/assets'),
            helpers: path.resolve(__dirname, 'src/helpers'),
            components: path.resolve(__dirname, 'src/components')
        }
    },
    devServer: {
        port: 8089,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!autoprefixer-loader!less-loader'
                })
            },
            {
                test: /\.(png|svg|jpg)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'TGM',
        template: path.resolve(__dirname, 'src/index.html')
    }),
    new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: false
    }),
    new CopyWebpackPlugin([{
        from: path.resolve(__dirname, 'src/assets/img'),
        to: path.resolve(__dirname, 'dist/img')
    }, {
        from: path.resolve(__dirname, 'src/assets/fonts'),
        to: path.resolve(__dirname, 'dist/fonts')
    }])]
};
