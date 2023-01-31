/* 接口interface */
// 1、用来描述结构的(对象、类、函数、混合类型)

/* 和type对比 */
// type: 可以用联合类型、不能重名、可以用于条件类型、映射
// interface: 可以重名、可以被拓展和实现、继承、混合类型


// 计数器
interface ICount {
    (): number;
    count: number;
}

const counter: ICount = () => {
    return counter.count++;
}
counter.count = 0;


// interface用于对象
interface IVeg {
    color: string;
    taste: string;
    size: number;
}

// ?1、通过断言的方法
// let veg: IVeg = {
//     color: 'red',
//     taste: 'sour',
//     size: 10,
//     other: 'xxx'
// } as IVeg;

// ?2、通过可选属性来标识
// interface IVeg {
//     color: string;
//     taste: string;
//     size: number;
//     other?: string;
// }

// ?3、继承拓展
// interface IVegWithOther extends IVeg {
//     other?: string;
// }
// let veg: IVegWithOther = {
//     color: 'red',
//     taste: 'sour',
//     size: 10,
//     other: 'xxx'
// }

// ?4、同名接口自动合并


/* 任意类型 */
interface IObject {
    [key: string]: any;
}

interface IArr {
    [key: number]: any;
}


// 通过索引访问接口中属性类型
interface Person {
    name: string;
    age: number;
    address: {
        num: 888
    }
}

type PersonName = Person['name'];
type PersonAdress = Person['address']['num'];
type PersonUnion = keyof Person;
type PersonValUnion = Person[PersonUnion];

export { };