// 小写是基础类型,大写是类类型
let num1: number = 12;
let num2: number = Number(12);
let num3: Number = new Number(12);

// 数组类型
// 字符串数组
let strArr: string[] = ['1','2']; // 从安全性考虑是否能赋值
// 联合类型
let strNumArr: (string | number)[] = ['1',2];
let strNumArr1: Array<string | number> = ['1',2];

// 元组（限制长度和类型的数组）
let tuple:[string,number,boolean] = ['1',2,false];
// 元组可以通过数组方法越界,但是无法获取

/* 枚举类型 */
// 普通枚举
enum STATUS {
  OK = 200,
  NOT_FOUND = 404,
  a = 'b'
}
// 常量枚举
const enum CONST{
  OK,
  NOT_FOUND
}

/* null && undefined */
let nu: null = null;
let un: undefined = undefined;

/* never 永远达不到的情况 */
// 1、程序报错
function throwError(): never{
  throw new Error('错误!')
}
// 2、死循环
function never():never{
  while (true){}
}
// 3、永远走不到的情况（完整性保护）
/* 联合类型只能取到共有属性 */
type ICircle = { r: number, kind: 'circle'}
type ISquare = { width: number, kind: 'square'}

function validate(obj: never){}
function getArea(obj: ICircle | ISquare){
  if(obj.kind === 'circle'){
    return Math.pow(obj.r, 2)
  }else if(obj.kind === 'square'){
    return Math.pow(obj.width, 2)
  }
  validate(obj);
}

/*  void 函数没有返回值, undefined兼容void */
function test(): void{}

/* object && any */
// object除了基本类型,都可以使用,例如数组,对象,函数
function create(target: object){
  // 只判断类型,不能取值
  // target.xxx
}

/* symbol && bigInt */

let name = 'xxx'; // 全局存在name属性,无法重复声明
export {};  // 实现模块化,不会污染全局




