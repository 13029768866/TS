class Cat {

}

class Dog {

}
interface IClazz<T> {
  new (...args: any[]): T
}
// 1、构造函数类型
function getInstanc<T>(Clazz: IClazz<T>){
  return new Clazz
}
let cat = getInstanc(Cat)

// 2、创建一个数组
interface ICreateArr {
  <T>(times: number, val: T): T[]
}

const createArr: ICreateArr = <T>(times: number, val: T) => {
  let arr = [];
  for(let i=0; i < times; i++) {
    arr.push(val);
  }
  return arr;
}

// 3、循环数组
// 方法一
/*const myForEach = <T>(arr:T[], cb:(item: T, idx: number) => void) => {
  for(let i=0; i < arr.length; i++){
    cb(arr[i], i)
  }
}*/

// 方法二
interface ICb<T>{
   (item: T, idx: number): void
}
type IForEach = <T>(arr: T[], cb: ICb<T>) => void;
const myForEach: IForEach = <T>(arr: T[], cb: ICb<T>) => {
  for(let i=0; i < arr.length; i++){
    cb(arr[i], i)
  }
}
myForEach([1,'2',3],function (item) {})

// 4、元组交换
const swap = (tuple: [number, string]): [string, number] => {
  return [tuple[1], tuple[0]]
}
let res = swap([0,'wzj'])


// 5、泛型约束
function sum<T extends number>(a: T,b: T){ return a+b }
let s1 = sum(1,2);

// 约束对象必须有key属性
function getPerson<T extends { say: string }>(obj: T){};
getPerson({ say:  '说'})

// keyof语法
type IKeys = keyof any

// function getVfromK<T extends object, K extends keyof T>(obj: T, key: K){}

interface IGetVformK {
  <T extends object,K extends keyof T>(obj: T, key: K): void
}
const getVfromK: IGetVformK = (obj, key) => {}

getVfromK({name: 'wzj'}, 'name')
export {}
