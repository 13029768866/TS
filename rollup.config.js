import ts from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';

export default {
  input: 'src/index.ts',
  output: {
    file: path.resolve('dist/bundle.js'),
    // name: 'wzj',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    ts(),
    nodeResolve()
  ]
}