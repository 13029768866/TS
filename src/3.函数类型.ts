/* 函数类型 */
//  1、入参类型
//  2、返回值类型

//  声明式
function sum(a: string, b: string): string {
    return a + b;
}

// 表达式
type Sum = (a: string, b: string) => string;
let sum1: Sum = function (a, b) {
    return a + b;
}

// 函数特性
// 1）可选 ?
type Eg = (x: string, y?: string) => string;
// 2) 默认值 =
let eg: Eg = function (a, b = '123') {
    return a + b;
}
// 3) 剩余参数
let sumNum = function (a: number, ...args: number[]) {
    return args.reduce((memo, current) => memo + current, a);
}

let result = sumNum(0, 1, 2, 3, 4);
console.log(result);

export {};