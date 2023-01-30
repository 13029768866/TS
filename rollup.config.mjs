import ts from "rollup-plugin-typescript2"; // 解析ts创建
import { nodeResolve } from "@rollup/plugin-node-resolve"; // 解析第三方模块插件
import serve from "rollup-plugin-serve"; // 启动本地服务
import path from "path";

export default {
  input: "./src/index.ts",
  output: {
    file: path.resolve("./dist/bundle.js"),
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      extensions: [".js", ".ts"], // 解析文件格式
    }),
    ts({
      tsconfig: "tsconfig.json",
    }),
    serve({
      open: true,
      openPage: "/public/index.html",
      port: 9527,
    }),
  ],
};
