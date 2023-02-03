//  1、对象部分属性可选
interface Company {
    name: string;
    persons: number;
}
interface Person<T = any> {
    name: string;
    age: number;
    // company: T;
    address: string;
}

type Compute<T extends object> = {
    [K in keyof T]: T[K]
}
type PartialOpt<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;
type res = Compute<PartialOpt<Person, 'name'>>;


// 2、根据值得类型选择key
type isEqual<T, U, Success, Fail> = [T] extends [U]
    ? [U] extends [T]
     ? Success 
     :Fail 
    :Fail; 

type PickVal2Key<T, U> = {
    [K in keyof T]: isEqual<T[K], U, K, never>
}[keyof T];

// 重映射
type PickValToKey<T extends object,U> = {
    [K in keyof T as T[K] extends U? K : never]: T[K];
}
type strRes = PickVal2Key<Person, string>;
type strRes1 = PickValToKey<Person, string>;

export { };