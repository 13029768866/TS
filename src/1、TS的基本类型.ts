/* 基础类型start */
// 常见：string，number，boolean
let str: string = "wzj";
let num: number = 18;
let bool: boolean = true;

// 基本类型不能描述实例类型,描述需要使用*类的类型（类类型）*
let s1: string = 'wzj';
let s2: String = 'wzj';
// let s3: string =  new String('wzj');  // error
let s4: String =  new String('wzj');
/* 基础类型end */

/* 数组类型start */
// 概念：存储一类类型的数据

let arr: number[] = [666,888];
//联合类型
let arr2: (number | string)[] = [666,888,'666','888'];
// 泛型
let arr3: Array<number | string> = [666,888,'666','888'];
/* 数组类型end */

/* 元组start */
// 概念：长度固定，类型固定的数组
let tuple:[string,number] = ["a", 1];
// 元组越界
tuple.push(1);  // 但是无所通过不安全的手段取值
// tuple[2]  // error
/* 元组end */

/* 枚举类型start */
// 枚举值根据第一个值递增,且里面都是数字的时候可以反举（基本用不到）
enum ROLE {
  USER,
  ADMIN,
  MANAGER
}

// 异构枚举: 储存值类型不统一（不常用）
enum mixin {
  A,
  B ='b',
  C = 'c'
}

// 常量枚举: 不会生成对象
const enum CONST {
  USER,
  ADMIN,
  MANAGER
}
/* 枚举类型end */

/* null / undefined start */
let u1: undefined = undefined;
let n1: null = null;
// let n2: undefined = null;  // 严格模式下error,非严格模式下可以互相赋值

/* null / undefined end */


/* never start */
// 用户自己标识never
// never是任何类型的子类型
// 抛出错误
function fn(): never {
  throw new Error();
}

// 死循环
function fn1(): never {
  while(true) {}
}

// 用never实现完整性保护
type IRant =  {
  width: number,
  height: number,
  kind: 'rant'
};
type ISquare = {
  width: number,
  kind: 'square'
};
function validate(params: never) {};
let rant: IRant = {
  width: 200,
  height: 100,
  kind: 'rant'
};
let square: ISquare = {
  width: 100,
  kind: 'square'
};

function getArea(params: IRant | ISquare){
  switch (params.kind){
    case "rant":
      return params.width * params.height;
      break;
    case "square":
      return Math.pow(params.width,2);
      break;
  }
  validate(params)
};
let areaR = getArea(rant);
let areaS = getArea(square);
/* never end */

/* 原始类型 symbol bigInt  start */
let symobl1 = Symbol();
let symobl2 = Symbol();
let big = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1);
/* 原始类型 symbol bigInt  end */

/* object start */
// object
function create(target: object){};
create({});
create([]);
create(function (){} );

/* object end */


export {};