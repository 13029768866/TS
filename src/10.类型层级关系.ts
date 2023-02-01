/**
 * ! 类型层级关系
 */

/**
 * ?单类型比较
 */
// 1、never 和 字面量
// 底端类型,最底层的
let a: number = (function (): never {
    throw new Error();
})();
// 2、字面量是基础类型的子类型
type T2 = 123 extends number ? true : false;
type T3 = 'abc' extends string ? true : false;


// 3、基础类型是包装类型的子类型
// 包装类型上一层Object 、字面量类型{} == new Object  
type T4 = string extends String ? true : false;
type T5 = String extends Object ? true : false;


// 4、any和unknown是顶端类型
// 所有类型都是这两个子类型
type T6 = Object extends any ? true : false;
type T7 = any extends unknown ? true : false;
type T8 = unknown extends any ? true : false;


/**
 * ?多类型比较（存在分发机智）
 */
interface Fish {
    name: '鱼';
}
interface Bird {
    name: '鸟';
}
interface Water {
    name: '水';
}
interface Sky {
    name: '天空';
}


type SelectType<T> = T extends Fish ? Water : Sky;
type T9 = SelectType<Bird | Fish>;
// 1）分发机制
// Bird -> Fish -> Sky
// Fish -> Fish -> Water
// 2）结果联合类型
// 3）类型需要裸类型不喝其他发生关系

type SelectType1<T> = [T] extends [Fish] ? Water : Sky;
type T10 = SelectType1<Bird | Fish>;

// 阻止分发
type NoDistrubte<T> = T & {};
type UnionAssets<T, U> = NoDistrubte<T> extends U ? true : false;

type T11 = UnionAssets<1 | 2, 1 | 2 | 3>;
type T12 = UnionAssets<1 | 2 | 3, 1 | 2>;

// 判断两个类型完全相等
type IsEqual<T, U, Success, Fail> = T extends U ? U extends T ? Success : Fail : Fail;
type T13 = IsEqual<1 | 2, 1 | 2, true, false>;
export { };
