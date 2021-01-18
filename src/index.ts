// 元组
let tupleType: [string, boolean];
tupleType = ["semlinker", true];
tupleType.push('last')

// 数组
// 1、联合类型
let list:(number | string)[] = [1,2,3,'a','b','c']
let list1:Array<number | string> = [1,2,3,'a','b','c']

// null和undefined
/*let str: string;
str = undefined;*/
// Void
let v:void;
v = undefined;
// v = null;

// Object
const creat = (obj:object) => {}

creat([])
creat({})
creat(function () {})


 