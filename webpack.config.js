const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/app/js/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    devServer: { contentBase: path.join(__dirname, "/app"),
        compress: true,
        port: 9000
    }
};

