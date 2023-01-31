/** 
 *  ! 泛型
 */

// 类似于函数的形参,一般采用一个大写的字母

// ? 入参和返回值存在映射关系时候
const getArray = <T>(times: number, val: T): T[] => {
    let result = [];
    for (let i = 0; i < times; i++) {
        result.push(val);
    }
    return result;
}
// getArray(3, '123');
// getArray(3, 123);

// ? 元组交换
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}
// type写法
type TSwap = <T, U>(tuple: [T, U]) => [U, T];
const tSwap: TSwap = (tuple) => {
    return [tuple[1], tuple[0]]
}

// interface写法
interface ISwap {
    <T, U>(tuple: [T, U]): [U, T];
}
const iSwap1: ISwap = (tuple) => {
    return [tuple[1], tuple[0]]
}


// ? 给myForEach添加类型

type ICb<T> = (item: T) => void;
type IForEach = <T>(arr: T[], cb: ICb<T>) => void;

// ! 注意
type ICb1<T> = (item: T) => void;   // 泛型在接口后,使用接口时候确定类型
type ICb2 = <T>(item: T) => void;   // 泛型在函数前,调用函数时候确定类型


const myForEach: IForEach = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i]);
    }
}
myForEach([1, '2', 3], function (item) {
    console.log(item);
})

export { };