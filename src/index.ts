//  常见类型: 基础类型、高级类型、内置类型

//  冒号后面都是类型标识

//  ts类型一切从安全角度来出发，开发环境检测非运行时，具有类型推导

/* 1、js原始类型进行标识 */
let str: string = 'string';
let number: number = 30;
let isBoolean: boolean = false;

// 包装类型 (ts中大写类型可以描述实例)
let str1: String = new String('abc');

/* 数组的类型 */
let arr1: number[] = [1,2,3];
let arr2: string[] = ['1','2','3'];
let arr3: (string | number)[] = [1,2,3,'1','2','3'];
let arr4: Array<string> = ['1','2','3'];
let arr5: Array<string | number> = [1,2,3,'1','2','3'];

/* 元组（长度、类型固定的数组） */
// 可以通过数组的方法进行越界,可以存放但是无法使用
let tuple:[ string, number, boolean ] = ['wzj', 28, true];
let username = tuple[0];

export {};