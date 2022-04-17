/* 函数start */
// 1、函数本身添加类型（一般不关心）
// 2、函数参数类型
// 3、函数返回值类型

// 声明方式：1、表达式 const fn = function(){}  2、关键字 function fn(){}
const sum = (a: string,b: string): string => a+b;

let fn = (a:string, b:string):string => a + b;
const sum1: (a: string, b: string)=> string = fn;

/* 关键字声明无法给函数本身添加类型 */
// 默认属性, 剩余运算符
function defaultFn(a = '',...args: number[]){}
defaultFn('a',2,3,4,5,);

// 可选属性?, this类型声明
function defaultFn1(this: IThis,a = '', b?: string){};
const obj = { name: 'wzj' };
type IThis = typeof obj;

defaultFn1.call(obj, 'a')

// 函数重载（方法名相同,参数不同,逻辑不通）
function toArray(val: number): Array<number>
function toArray(val: string): Array<string>
function toArray(val: string | number): Array<string | number>{
  if(typeof val === 'string'){ return val.split('') }
  else{ return val.toString().split('').map(Number)}
}
let res1 = toArray(123)
let res2 = toArray('123')


/* 函数end */

export {}