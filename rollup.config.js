import ts from 'rollup-plugin-typescript2'                  // 解析ts创建
import { nodeResolve } from '@rollup/plugin-node-resolve'   // 解析第三方模块插件
import serve from "rollup-plugin-serve"                     // 启动本地服务
import path from 'path'

export default {
    input: 'src/index.ts',
    output:{
        format: 'iife',      // 立即执行
        file: path.resolve(__dirname,'dist/bundle.js'),
        sourcemap: true,     // 产生源码映射文件
    },
    plugins:[
        ts({
           tsconfig: path.resolve(__dirname,'tsconfig.json')
        }),
        nodeResolve({
            extensions: ['.js','.ts']
        }),
        serve({
            open: true,
            openPage: '/public/index.html',     // 本地服务入口页面
            contentBase: '',
            port: 9527
        })
    ]
}