const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'API_URI': JSON.stringify('http://ec2-18-222-240-13.us-east-2.compute.amazonaws.com:8000')
            },
        }),
    ]
});