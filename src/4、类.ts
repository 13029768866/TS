/* 类start */
// 1、属性定义: 实例属性、原型属性   原型方法、静态方法
// 2、属性修饰符: public,private,protected,readonly
class Circle {
   /* 通过public修饰符,直接绑在this上 */
  constructor(public x: number,public y: number,public r?: number) {
    // this.x = x; // this上的属性必须提前声明
    this.x = x;
    this.y = y;
    this.r = r;
  }
}
let c1 = new Circle(1,2,3);

class Animal {
/*  public
  constructor(public name: string) {}*/
/*  private 自己访问（只能Animal类访问）
  constructor(private name: string) {}*/
/*  protected 自己和自己子类访问
  constructor(protected name: string) {}*/
  // readonly
  constructor(public readonly name: string) {
    /* readonly在初始化（构造函数中）可以随意修改 */
    this.name = 'dog'
  }
}
class Cat extends Animal {
  constructor(name: string,public age: number) {
    super(name);
  }
}
const cat = new Cat('Tom', 8)

class Person {
  constructor(protected name: string) {}
  // public eat(): string { return '吃饭' }
  /* void表示不关心子类的返回值 */
  public eat(): void {}
  /* static定义静态属性,静态方法和属性通过类调用 */
  static drink = '喝'
}
class Man extends Person {
  constructor(name: string, public sex: string) {
    /* 构造函数constructor中super指代父类 */
    super(name);
  }
  public eat(): string {
    /* 原型方法中super指代父类的原型 */
    super.eat()
    return '吃山珍海味';
  }
}

/* 类end */

export {}