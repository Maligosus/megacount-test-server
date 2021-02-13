
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals=require('webpack-node-externals');
const path=require('path');


module.exports={
    entry:{
        main:"./src/index.ts"
      },
      externals:[nodeExternals()],
      mode:'development',
      module: {
          rules: [
            {
              test: /\.ts?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
          ],
        },
        resolve: {
          extensions: [ '.ts', '.js' ],
        },
        output: {
          filename: 'main.js',
          path: path.resolve(__dirname, 'dist'),
          publicPath: "/"
        },
        plugins:[
          new NodemonPlugin({
              script: './dist/main.js',
              watch: path.resolve('./dist'),
              ext: 'js,ts,json',
              delay:"300"
          })
        ]
};