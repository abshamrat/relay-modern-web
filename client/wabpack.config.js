const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    mode: 'development',
    entry:  "./src/main.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js", 
        publicPath: "/assets/",
    },
    devServer: {
        contentBase: PATHS.dist,
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
                    path.resolve(__dirname, "/node_modules")
                  ],
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    }
}