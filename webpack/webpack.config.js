const path = require('path');
const devServer=require('webpack-dev-server');
const HtmlPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');
module.exports={
    entry:{
        //要打包文件
        index:'./src/index.js'
    },
    output:{
        //打包文件输出的路径
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    //css
    module:{
        rules:[
            {
                test:/\.css$/,
               // use:['style-loader','css-loader']     css引入到js文件中
               use:ExtractTextPlugin.extract({   // css 分离
                   fallback:"style-loader",
                   use:"css-loader"
               })
            },
            {
                test:/\.(png|jpg|gif)/,
                use:[
                    {
                    loader:'url-loader',
                    options:
                        {
                            limit:500,
                            outputPath:"../images/"
                        }
                    }]
            }
        ]
    },

    //插件
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:"./src/index.html",
            chunks:['index']
        }),
        new ExtractTextPlugin('css/index.css'),
        new UglifyJsPlugin()
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        port:'8081'
    }
} 