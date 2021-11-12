import * as webpack from 'webpack';
import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';

const webpackConfig:webpack.Configuration = {
    entry: {
        main: "./src/index.ts"
    },
    mode: "development",
    devServer:{
      port: 8080,
      hot: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: {
           name: "CyScrollBar",
           type: "window",
            export: "default",
        }
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: [
                    "ts-loader"
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve:{
        extensions: ['.js', '.ts']
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: 'index.html',
            scriptLoading: undefined
        }),
        new CleanWebpackPlugin({})
    ]
}

export default webpackConfig