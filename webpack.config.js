const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/sheet.js',
    output : {
        path: path.resolve(__dirname, './dist'),
        filename:'rsheet.dist.js'
    },
    watch: true,
    // watchOptions: {
    //     aggregateTimeout: 300,
    //     poll: 1000
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                      presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    devServer: {
        // contentBase: __dirname,
        port: 9000,
        compress: true,
        publicPath: '/dist'
    }
    // plugins: [
    //     // new webpack.HotModuleReplacementPlugin()
    // ]
  };