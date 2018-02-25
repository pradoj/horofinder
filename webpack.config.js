const WebpackShellPlugin = require('webpack-shell-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
// import WorkboxConfig from './workbox-config.js';
const WorkboxConfig = require('./workbox-config.js');

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '.')
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
        new WorkboxPlugin.InjectManifest(WorkboxConfig)
    ],
    devServer: {
        host: "0.0.0.0",
        port: 8080
    },
};