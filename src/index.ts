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

/*creat([])
creat({})
creat(function () {})*/

 // 断言
 // 非空断言
/*function myFunc(maybeString: string | null | undefined){
    // Type 'string | null | undefined' is not assignable to type 'string'.
    // Type 'undefined' is not assignable to type 'string'.
    const onlyString: string = maybeString;
    const ignoreNullAndUndefined = maybeString!;
}*/

 // 调用函数忽略undefined
/*type NumGenerator = () => undefined;
function myFunc(numGenerator: NumGenerator | undefined){
    const num = numGenerator();
    // TS2532: Object is possibly 'undefined'.
    // TS2722: Cannot invoke an object which is possibly 'undefined'.

    const num1 = numGenerator!();
}*/

 // 确定复制断言
 let x!: number;
 init()
 console.log(x);
// TS2454: Variable 'x' is used before being assigned.

function init(){
     x = 10
 }
 