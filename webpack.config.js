const path = require('path');
const NodeExternals = require('webpack-node-externals');
const StartServer = require('start-server-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname,'src'),
    entry : './index.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js'
    },
    target: 'node',
    watch: true,
    mode: 'development',
    externals: [new NodeExternals()],
    plugins: [new StartServer('bundle.js')]
};