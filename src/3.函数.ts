/* 函数 */
// 关键字
function sum(x: string, y: string): string{
  return x + y;
}

// 表达式,可以标注类型
type ISum = (x: number, y: number) => number;
const deepSum: ISum = (x:number, y:number):number => x + y;

// this类型
// 1、必须放在函数第一个参数,名字必须叫this
function callThis(this:thisType,val: string){
  // this.name
  // this.age
}

let params = {name: 'wzj', age: 18}
/* typeof是ts种的语法,作用是取出值对应的类型 */
type thisType = typeof params
callThis.call(params, 'good')

// 函数的重载
function toArray(val: string): string[]
function toArray(val: number): number[]
function toArray(val:any){
  if(typeof val === 'string'){
    return val.split('')
  }else if(typeof val === 'number'){
    return val.toString().split('').map(Number)
  }
}

let test = toArray(12345)
let test1 = toArray('12345')


export {};