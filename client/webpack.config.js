const path = require('path');

module.exports = {
    context: __dirname,
    mode: 'development',
    entry:  __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "index.js", 
        publicPath: "/assets/",
    },
    devServer: {
        contentBase: __dirname + "/dist",
        compress: true,
        headers: {
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY'
        },
        open: true,
        inline: true,
        port: 8081,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: [
                     "/node_modules"
                  ],
                loader: 'babel-loader',
                options: {
                  presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}