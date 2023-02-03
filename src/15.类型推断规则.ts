/**
 * ! 类型推断
 */

// 1、赋值推断
let name = 'str';
let age = 30;

// 2、从右向左
function sum(a: string, b: string) {
    return a + b;
}

// 3、反向推断（从左到右, 从右到左）
type ISum = (a: string, b: string) => string;
const sum1: ISum = (a, b) => {
    return a + b;
}
export { };