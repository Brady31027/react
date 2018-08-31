const path = require('path');

module.exports = {
    entry: './src/playground/redux-expensify.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
            query: {
                presets: ['env', 'react'],
                plugins: ["transform-class-properties", 
                          "transform-object-rest-spread"]
            }
        }, {
            use: ['style-loader', 
                  'css-loader', 
                  'sass-loader'],
            test: /\.s?css$/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};