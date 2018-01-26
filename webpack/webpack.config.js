const path = require('path');
const devServer=require('webpack-dev-server');
const HtmlPlugin=require('html-webpack-plugin');
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
                use:['style-loader','css-loader']
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
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        port:'8081'
    }
} 