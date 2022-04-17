import path from 'path';
import ts from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: {
    file: path.resolve(__dirname,'dist/bundle.js'),
    // name: 'wzj',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    ts(),
    nodeResolve()
  ]
}