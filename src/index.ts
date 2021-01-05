// 元组
let tupleType: [string, boolean];
tupleType = ["semlinker", true];
tupleType.push('last')

// 数组
// 1、联合类型
let list:(number | string)[] = [1,2,3,'a','b','c']
let list1:Array<number | string> = [1,2,3,'a','b','c']

// Void
let v:void;
v = undefined;

// Object
const creat = (obj:object) => {}

creat([])
creat({})
creat(function () {})


