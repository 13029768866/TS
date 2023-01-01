//  常见类型: 基础类型、高级类型、内置类型

//  冒号后面都是类型标识

//  ts类型一切从安全角度来出发，开发环境检测非运行时，具有类型推导

/* 1、js原始类型进行标识 */
let str: string = 'string';
let number: number = 30;
let isBoolean: boolean = false;

// 包装类型 (ts中大写类型可以描述实例)
let str1: String = new String('abc');

/* 数组的类型 */
let arr1: number[] = [1,2,3];
let arr2: string[] = ['1','2','3'];
let arr3: (string | number)[] = [1,2,3,'1','2','3'];
let arr4: Array<string> = ['1','2','3'];
let arr5: Array<string | number> = [1,2,3,'1','2','3'];

/* 元组（长度、类型固定的数组） */
// 可以通过数组的方法进行越界,可以增加但是无法使用
let tuple:[ string, number, boolean ] = ['wzj', 28, true];
let username = tuple[0];

/* 枚举 */
// 1、数字枚举,没有赋值,从0开始,数字递增
enum USER_ROLE {
    USER,
    ADMIN,
    SUPER_ADMIN
}
// 2、字符串枚举
enum STR_ENUM {
    DICT_A = 'a',
    DICT_B = 'b'
}

// 3、常量枚举
const enum CONST_ENUM {
    USER = 'a',
    ADMIN = 10
}

/* never类型 */
// 1、无法到达终点（死循环）
function whileTrue(): never {
    while(true) {}
}

// 2、抛出错误
function throwError(): never {
    throw new Error();
}

// 3、校验逻辑完整性，实现完整性保护
function validateCheck(val: never){};
function getResult(strOrBooleanOrNum: string | boolean | number) {
    if(typeof strOrBooleanOrNum === 'string'){
        return 'string'
    }else if(typeof strOrBooleanOrNum === 'number'){
        return 'number'
    }else if(typeof strOrBooleanOrNum === 'boolean'){
        return 'boolean'
    }

    validateCheck(strOrBooleanOrNum);
}

/* 对象 */
// 1、大写的Object类型,基本不用
// 2、{}字面量类型
// 3、object表示对象类型
function create(target: object){};
create(function() {});
create([]);
create({});
// create(123);



export {};
