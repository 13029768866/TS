/* 类型断言 start */
let n: string | number;
// (n as string).charCodeAt;
/* 双重断言 */
// (n as any as boolean).valueOf();

let ele: HTMLElement | null = document.getElementById('app');
(ele as HTMLElement).style.background = 'skyblue';
/* 非空断言 */
// !是ts的语法
let ele1: HTMLElement = document.getElementById('app')!;
(<HTMLElement>ele).style.background = 'skyblue';

/* 字面量类型 */
type IDirection = 'up' | 'down' | 'left' | 'right';
let direction: IDirection = 'up';

/* 类型断言 end */

/* TS中: 并集就是联合类型, 交集就是交叉类型 */
type People1 = { name: string, handsome: string};
type People2 = { name: string, height: string};

type People3 = People1 | People2;
type People4 = People1 & People2;

let p3_1: People3 = { name: 'wzj', handsome: 'good'};
// p3_1.name, p3_1.handsome 可取值, p3_1.height   error
let p3_2: People3 = { name: 'wzj', height: '100'};
// p3_2.name, p3_2.height 可取值, p3_1.handsome   error
let p3_3: People3 = { name: 'wzj', handsome: 'good', height: '100'};
// 范围越出，只能取共有属性 p3_3.name

let p4_1: People4 = { name: 'wzj', handsome: 'good', height: '100'};
// 交集必须赋值所有属性,也可以取值所有属性

export {}