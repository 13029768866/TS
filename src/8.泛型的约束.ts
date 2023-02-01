/**
 * ! 泛型约束 extends
 */
// 泛型可以制定默认值,默认泛型
type Union<T = string> = T | number;

type t1 = Union;
type t2 = Union<boolean>;

// 泛型约束

// 约束在类型声明阶段, 通过extends约束, A extends B, A是B的子类型
// 只能接收字符串和数字类型
function handle<T extends string | number>(val: T): T {
    return val;
}
let r1 = handle(123);
let r2 = handle('123');
// let r3 = handle(boolean);

// 获取值
function getVal<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

getVal({ a: 1, b: 2, c: 3 }, 'a')
export { };