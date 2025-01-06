const path = require('path');
const { loadEnvFile } = require('process');

module.exports = {
    // mode: production,
    mode: 'production',
    entry: './frontend/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: 'source-map'
};
