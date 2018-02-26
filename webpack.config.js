const WebpackShellPlugin = require('webpack-shell-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// import WorkboxConfig from './workbox-config.js';
const WorkboxConfig = require('./workbox-config.js');

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '.'),
    },
    plugins: [
        new WebpackShellPlugin({
            onBuildStart: [
                'echo "Webpack Start"',
            ],
            onBuildEnd: [
                'echo "Webpack End"',
            ]
        }),
        new WorkboxPlugin.InjectManifest(WorkboxConfig),
        new CleanWebpackPlugin([
            'css/index.js',
            'build.js',
            'index.js',
            'precache-manifest*',
            'sw.js',
        ]),
        new ExtractTextPlugin('css/index.css'),
    ],
    devServer: {
        host: "0.0.0.0",
        port: 8080,
        compress: true,
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                },
            },
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })
        }
        ]
    }
};