const path = require('path');
const devServer=require('webpack-dev-server');
const HtmlPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');
const glob=require('glob');
const PurifyCSSPlugin=require('purifycss-webpack');
module.exports={
    entry:{
        //要打包文件
        index:'./src/index.js'
    },
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
        new UglifyJsPlugin(),
        new PurifyCSSPlugin({
            path:glob.sync(path.join(__dirname,'src/*.html')),
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        port:'8081'
    }
} 