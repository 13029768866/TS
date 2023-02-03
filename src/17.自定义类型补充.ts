type A = {
    name: string;
    age: number;
    address: string;
}

type B = {
    name: string;
    male: boolean;
    address: string;
}

// 对象交集
type ObjectInner<T extends object, U extends object> = Pick<
    T, 
    Extract<keyof T, keyof U>
>;

type inner = ObjectInner<A, B>;

// 对象差集
type ObjectDiff<T extends object, U extends object> = Pick<T, Exclude<keyof T, keyof U>>;
type diffA = ObjectDiff<A,B>;
type diffB = ObjectDiff<B,A>;

// 类型互斥
interface Man {
    rich: string;
    funny?: never;
}
interface Man1 {
    funny: string;
    rich?: never;
}

type ManType = Man | Man1;
let man: ManType = {
    // rich: '富有',
    funny: '风趣'
}
export {};