const path = require('path');
const devServer=require('webpack-dev-server');
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
    module:{

    },
    plugins:[
        
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        port:'8081'
    }
}