/* 类型断言 */
let el: HTMLElement | null = document.getElementById('root');
// 非空断言
el!.style.background = 'red';
// as 语法
type IValue = number | string | HTMLElement;
function getVal(el: IValue){
  (<HTMLElement>el).style.background = 'red';
  // 推荐使用as
  (el as HTMLElement).style.background = 'red';
}

export {};