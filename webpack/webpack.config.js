const path = require('path');
const devServer=require('webpack-dev-server');
const HtmlPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack=require('webpack');
const entry=require('./webpack_config/entry_webpack');
module.exports={
    entry:entry,    //模块化配置
    //{
        //要打包文件
        //index:'./src/index.js'
        
    //},
    output:{
        //打包文件输出的路径
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        //
        publicPath:"http://localhost:8081/"
    },
    //css
    module:{
        rules:[
            {
                test:/\.css$/,
               // use:['style-loader','css-loader']     css引入到js文件中
               use:ExtractTextPlugin.extract({   // css 分离
                   fallback:"style-loader",
                   use:[{                             //css前缀
                       loader:"css-loader",
                       options:{
                           importLoaders:1
                       }
                    },'postcss-loader']
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
                            outputPath:"images/"
                        }
                    }]
            },
            {
                test:/\.(htm|html)$/i,
                use:['html-withimg-loader']
            },
            {
                test:/\.scss$/,
                //use:['style-loader','css-loader','sass-loader']    打包到js文件里
                use:ExtractTextPlugin.extract({     //打包成分离的css
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']
                })
            },
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            'es2015','react'
                        ]
                    }
                },
                exclude:/node_modules/
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
        //new UglifyJsPlugin(),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'./src/index.html')),
        }),
        new webpack.BannerPlugin('翻版必究！'),
        new webpack.optimize.CommonsChunkPlugin(
            {
                //name对应入口文件中名字
                name:'jquery',
                //把文件打包到哪里 输入路径
                filename:'js/jquery.js',
                //最小打包的文件模块数
                chunks:2
            }
        )
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        port:'8081'
    }
} 