/* 接口 */
// 修饰符
// 1、可选 2、只读
interface IFruit {
  size?: string,
  readonly type: string
}

let fruit: IFruit = {
  type: 'apple',
}

// 2、as const标识类型
let fruit1 = { type: 'orange', size: 'big'} as const;
// fruit1 的类型 {
//   readonly type: string,
//   readonly size: string,
// }

// 3、同名接口会进行合并操作
interface ISprots {
  num: number
}
interface ISprots {
  gender: string
}
let football: ISprots = {
  num: 11,
  gender: 'man'
}

// 4、实际赋值超过接口定义时,可以通过as强行转化
interface IPeople {
  gender: string,
  age: number,
}

let wzj: IPeople = {
  gender: 'man',
  age: 28,
  hobby: 'women'
} as IPeople;

// wzj.hobby 根据安全性原则,不能使用  // Error

// 5、可以多继承
interface IMum {
  wealth: string
}
interface IDad {
  lastName: string
}
interface ISon extends IDad,IMum{
  age: number;
}
let son: ISon = {
  wealth: 'poor',
  lastName: 'W',
  age: 18
}

// 6、任意接口
interface IAny {
  name: string,
  [key: string]: any
}

let test: IAny = {
  name: 'every',
  age: 18
}

export {}
