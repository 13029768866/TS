/* 联合类型 */
// 1、没有确定值之前,只能采用共有的方法
let strOrNumber: string | number;
strOrNumber = 'wzj';
strOrNumber.toLocaleLowerCase();

strOrNumber = 13;
strOrNumber.toFixed();

/* 类型断言 */
// 1、! 非空断言，我断定这个变量一定有值。后果我负责！
let ele = document.getElementById('root');
ele!.style.background = 'red';

// 2、强制类型断言
let strOrNumber1: string | number;

(strOrNumber1! as string).toLocaleLowerCase;


type Direction = 'up' | 'down' | 'left' | 'right';
let direction: Direction = 'up';

export { };