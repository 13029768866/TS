/* 类 */
// 1、组成部分: 构造函数、属性(实例属性，原型属性)、方法(实例方法、原型方法、访问器)、静态的属性和方法
// 2、修饰符：public、protected、private 

class Animal {
    constructor(public name: string, public age: number) { }
}
class Cat extends Animal {
    public address; // 原型属性 
    constructor(name: string, age: number) {
        super(name, age)

        this.address = '人间';

    }
};
let cat = new Cat('Tom', 10)
console.log(cat);

// 类的属性
class Props {
    static type = '静态属性'; // 静态属性,通过类访问
    private _name: string = '原型属性'; // 原型属性,通过属性访问器get,set访问
    get name() {
        return this._name;
    }
    set name(newVal) {
        this._name = newVal;
    }
}
let p1 = new Props();
let p2 = new Props();

console.log('原型属性~~~', p1.name === p2.name);
console.log('静态属性~~~', Props.type);

// 抽象类
// 1、可以被继承，不能new
// 2、抽象方法只能在抽象类中定义
// 3、抽象方法子类必须实现
abstract class Person {
    drink() {
        console.log('喝');
    }
    abstract eat(): void;
}

class Teacher extends Person {
    // 原型实现抽象方法
    // eat(): void {   
    //     console.log('吃');        
    // }

    // 实例实现
    eat: () => void;
    constructor() {
        super();
        this.eat = function () {
            console.log('吃');
        }
    }
}

/**
 * !总结:
 * 1、原型属性通过属性访问器访问修改（get xxx, set xxx）、原型方法直接在类型定义
 * 2、实例属性和实例方法声明在实例上
 * 3、静态属性和方法在类中static声明,通过类直接访问
 * 4、super指向父类、父类的原型。
 *  4.1、构造函数、静态方法中指向父类。
 *  4.2、原型方法中指向父类的原型。
 */
export { };