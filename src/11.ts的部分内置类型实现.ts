/**
 * ! 内置类型
 */
// Extract、Exclude、NonNullable

// 交集
type MyExtract<T, U> = T extends U ? T : never;
type ExtractRes = Extract<string | number, string | number | boolean>;
type MyExtractRes = MyExtract<string | number, string | number | boolean>;

// 差集
type MyExclude<T, U> = T extends U ? never : T;
type ExcludeRes = Exclude<string | number | boolean, string | number>;
type MyExcludeRes = MyExclude<string | number | boolean, string | number>;

// 补集 差集 + 子集
type Complete<T, U extends T> = T extends U ? never : T;
type CompleteRes = Complete<string | number | boolean, string | boolean>;

// NonNullable
type MyNonNullable<T> = T extends null | undefined ? never : T;
let ele = document.getElementById('root');
type Ele = NonNullable<typeof ele>;
type EleRes = MyNonNullable<typeof ele>;


// 对象合并
type A1 = { name: string };
type A2 = { age: number };
type Compute<T extends object> = {
    [K in keyof T]: T[K]
}
type Union = Compute<A1 & A2>;


// 对象属性修饰符操作
// 可选属性
interface Company {
    name: string;
    persons: number;
}
interface Person<T = any> {
    name: string;
    age: number;
    company: T;
}

type MyPartial<T> = {
    [K in keyof T]?: T[K] extends object ? MyPartial<T[K]> : T[K];
};
type withCompany = Partial<Person<Company>>;
type withCompany1 = MyPartial<Person<Company>>;
let person: withCompany1 = {
    age: 123,
    company: {}
}
// 必填属性
type MyRequired<T> = {
    [K in keyof T]-?: T[K] extends object ? MyRequired<T[K]> : T[K];
};
type withCompany2 = Required<Partial<Person<Company>>>;
type withCompany3 = MyRequired<Partial<Person<Company>>>;
let person1: withCompany3 = {
    name: 'wzj',
    age: 123,
    company: {
        name: 'wzjgs',
        persons: 888
    }
}

// Pick 
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
};
type PickPerson = Pick<Person, 'name' | 'age'>
type PickPerson1 = MyPick<Person, 'name' | 'age'>

// Omit
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
type OmitPerson = Omit<Person, 'name' | 'age'>
type MyOmitPerson = MyOmit<Person, 'name' | 'age'>


// Record<string, any> -> 取代object
export { };