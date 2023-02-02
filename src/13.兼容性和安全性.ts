/**
 * ! 兼容性
 */
let obj: {
    toString: () => string
}

let str: string = 'wzj';    // 兼容性,可以把string看成一个对象,基于toString拓展了其他功能
obj = str;  // 安全性, 保证使用时候不会发生异常

// 接口兼容性
interface IAnimal {
    name: string;
    age: number;
}
interface IPerson {
    name: string;
    age: number;
    address: string;
}
let animal: IAnimal;
let person: IPerson = {
    name: 'wzj',
    age: 18,
    address: 'china',
}

animal = person;
// 你要的我都有，可以认为人是动物拓展出来的子类
// 但是animal通过安全性考虑，只能使用name、age


// 函数的兼容性
// 1) 参数少的可以赋值给参数多的 
let sum1 = (a: string, b: string) => a + b;
let sum2 = (a: string) => a;
sum1 = sum2;

let sum3!: () => string | number;
let sum4!: () => string;
sum3 = sum4;

// 类型分类: 结构化类型, 标称类型

class AddType<S> {
    private _type!: S;
}

type NewType<T, S> = T & AddType<S>;
type BTC = NewType<number, 'btc'>;
type USDT = NewType<number, 'usdt'>;

let btc = 100 as BTC;
let usdt = 100 as USDT;

function getCount(count: BTC) {
    return count;
}

getCount(btc);
// getCount(usdt);

export { };