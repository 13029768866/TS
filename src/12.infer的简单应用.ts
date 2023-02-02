/**
 * ! 类型推断 infer
 */

// ?只能用在条件类型中,用来提取类型某一部分的

// 推导函数返回值类型
function getUser(name: string, age: number) {
    return {
        name,
        age,
        address: {}
    }
}
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R
    ? R
    : any;

type T1 = ReturnType<typeof getUser>;
type T2 = MyReturnType<typeof getUser>;


// 推导函数参数类型
type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any
    ? P
    : any;

type T3 = Parameters<typeof getUser>;
type T4 = MyParameters<typeof getUser>;

// 数组最后一个类型移动到前面
type EndToStart<T extends any[]> = T extends [...infer A, infer B]
    ? [B, ...A]
    : any;
type res = EndToStart<['nb', 6, 6, 6, 'wzj']>


// 元组转化成联合类型
type Tuple2Union<T> = T extends Array<infer R>
    ? R
    : any;
type res2 = Tuple2Union<[string, number, boolean]>;


export { };