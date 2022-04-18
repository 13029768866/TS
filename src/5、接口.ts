/* interface start */
// 接口概念: 描述数据形状

/* type 和 interface的区别 */
// 1、type可以使用联合类型,interface不可以
// 2、type不能被继承和实现。interface可以
// 3、interface中不能用in操作符,type可以
// 4、interface重复定义可以合并,type不可以

interface IFruit {
  color: string,
  size: number,
  drink: () => string,
}

/* 赋值操作具备兼容性特点 */
let fruit: IFruit = {
  color: 'red',
  size: 10,
  drink(){ return '酸的'},
  // taste: '甜的'  // error
}

// 1、通过兼容性赋值
let f = {
  color: 'red',
  size: 10,
  drink(){ return '酸的'},
  taste: '甜的'
}
let fruit1: IFruit = f;

// 2、类型断言
let fruit2: IFruit = {
  color: 'red',
  size: 10,
  drink(){ return '酸的'},
  taste: '甜的'
} as IFruit;

// 3、接口可以添加可选属性
/*interface IFruit {
  color: string,
  size: number,
  drink: () => string,
  taste: string
}*/

// 4、同名接口合并
/*interface IFruit {
  taste?: string
}*/

// 5、继承 && 任意接口
interface IFruit1 extends IFruit {
  taste?: string
  [key: string]: any  // 任意类型
}

// 6、可索引类型定义数组和数字映射表
interface IArr {
  [key: number]: any
}

// 7、描述函数
interface ISum {
  (x: string, y: string): string
}


/* interface end */

export {}