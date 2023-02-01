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

export { };