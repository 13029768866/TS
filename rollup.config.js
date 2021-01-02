import ts from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import serve from "rollup-plugin-serve";
import path from 'path';

export default {
    input: 'src/index.ts',
    output:{
        format: 'iife', // 立即执行
        file: path.resolve(__dirname,'dist/bundle.js'),
        sourcemap: true
    },
    plugins:[
        nodeResolve({   // 第三方文件解析
            extensions: ['.js','.ts']
        }),
        serve({
            openPage: '/public/index.html',
            contentBase: '',
            port: 9527
        }),
        ts({
            tsconfig: path.resolve(__dirname,'tsconfig.json')
        })
    ]
}