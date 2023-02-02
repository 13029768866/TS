/**
 * ! 函数逆变,协变
 */
// 逆变: 子 -> 父
// 协变: 父 -> 子
// 总结: 传参可以向上兼容父亲, 返回值可以向下兼容孙子
class Parent {
    house() { }
}

class Child extends Parent {
    car() { }
}
class Grandson extends Child {
    sleep() { }
}

function fn(cb: (instance: Child) => Child) {
    cb(new Grandson());
}

fn((instance: Parent): Grandson => {
    return new Grandson();
})

type Arg<T> = (arg: T) => void;
type Return<T> = (arg: any) => T;

type isArg = Arg<Parent> extends Arg<Child> ? true : false;             // 逆变
type isReturn = Return<Grandson> extends Return<Child> ? true : false;  // 协变
export { };