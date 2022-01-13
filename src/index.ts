class Circle {
  // public修饰符作用,参数定义在this上
  constructor(
    public x: number,
    public y: number,
    public r: number
  ) {
  }
}
let circle = new Circle(50,50,100)

/* 属性修饰符 */
// public   全部可以访问
// private  只能自己访问
// protected 自己和子类可以访问,外界不可以
// readonly  只能在初始化时候赋值
class Animal{
  constructor(private name: string) {
  }
}

class Cat extends Animal{
  constructor(name: string) {
    super(name);
  }
}

/* 属性分类 */
// 实例属性
// 原型属性
// 静态属性 && 方法 关键字static
// 属性访问器 defineProperty做代理
// class Animal{
//   constructor(public readonly name: string) {
//     this.name = name;
//   }
//   eat(){
//
//   }
//   static drink(){ // 静态方法只能被类来调用
//
//   }
// }
//
// class Cat extends Animal{
//   constructor(name: string, age: number) {
//     super(name); //  等于Animal.call(this,name);
//     // this.name = name;  // readonly不可重复赋值
//   }
//   get type(){ // 添加原型属性,通过getter添加 类的属性访问器
//     return {}
//   }
// }
// const cat = new Cat('Tom',18);
// console.log(cat);
/*
*   cat.eat();
*   Cat.drink();
* */
export {}