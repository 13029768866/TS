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

/**
 * ? 函数重载
 */
function toArray(value: string): string[];
function toArray(value: number): number[];
function toArray(value: string | number) {
    if(typeof value === 'string') {
        return value.split('');
    }else {
        return value.toString().split("").map(Number);
    }
}
let arr1 = toArray('123');
let arr2 = toArray(123);

export {};