## 一、TS是什么

- TS是微软开发的一种开源的编程语言
- TS是JS的一个超集，遵循ES5/ES6/ES7规范，拓展了JS语法，添加了可选的静态类型和基于类的面向对象编程

### 1.1、TS JS的区别

| TypeScript                                     | JavaScript                                 |
| ---------------------------------------------- | ------------------------------------------ |
| JavaScript 的超集用于解决大型项目的代码复杂性  | 一种脚本语言，用于创建动态网页             |
| 可以在编译期间发现并纠正错误                   | 作为一种解释型语言，只能在运行时发现错误   |
| 强类型，支持静态和动态类型                     | 弱类型，没有静态类型选项                   |
| 最终被编译成 JavaScript 代码，使浏览器可以理解 | 可以直接在浏览器中使用                     |
| 支持模块、泛型和接口                           | 不支持模块，泛型或接口                     |
| 社区的支持仍在增长，而且还不是很大             | 大量的社区支持以及大量文档和解决问题的支持 |

### 1.2、环境配置

1. 安装

   ```js
   npm install typescript -g
   ```

2. 验证

   ```js
   tsc -v
   // Version 版本号
   ```

3. 线上编译地址（[TypeScript Playground](https://typescript-play.js.org/)）

4.  本地编译(构建工具rollup)

#### 1.2.1、rollup构建ts项目

1. ```js
   1、npm install ts-node -g
   2、tsc --init 	// 初始化ts配置文件
   3、npm init -y	// 初始化配置文件
   4、npm install rollup typescript rollup-plugin-typescript2 @rollup/plugin-node-resolve rollup-plugin-serve -D		//	安装依赖
   rollup-plugin-typescript2 		// 解析ts文件
   @rollup/plugin-node-resolve		// 用node的方式解析第三方模块 
   rollup-plugin-serve				// 启动本地服务
   ```

2. rollup.config.mjs

   ```js
   import ts from 'rollup-plugin-typescript2'                  // 解析ts创建
   import { nodeResolve } from '@rollup/plugin-node-resolve'   // 解析第三方模块插件
   import serve from "rollup-plugin-serve"                     // 启动本地服务
   import path from 'path'
   
   export default {
       input: 'src/1.ts基础类型.ts',
       output:{
           format: 'iife',      // 立即执行
           file: path.resolve(__dirname,'dist/bundle.js'),
           sourcemap: true,     // 产生源码映射文件
       },
       plugins:[
           ts({
              tsconfig: path.resolve(__dirname,'tsconfig.json')
           }),
           nodeResolve({
               extensions: ['.js','.ts']
           }),
           serve({
               open: true,
               openPage: '/public/index.html',     // 本地服务入口页面
               contentBase: '',
               port: 9527
           })
       ]
   }
   
   ps: 如果开启源码映射，tsconfig.js中同步开启
   ```

3.  错误处理

```
tsconfig.json中module模式更改为ESNext
```

### 1.3、工作流

**TS --> JS --> 打包处理 --> 部署**

![](TS入门导学.assets\TS工作流.png)

## 二、TS基础类型

### 2.1、Boolean 类型

```typescript
let isDone: boolean = false;
// ES5：var isDone = false;
```

### 2.2、Number 类型

```typescript
let count: number = 10;
// ES5：var count = 10;
```

### 2.3、String 类型

```typescript
let name: string = "semliker";
// ES5：var name = 'semlinker';
```

### 2.4、Symbol 类型

```typescript
const sym = Symbol();
let obj = {
  [sym]: "semlinker",
};

console.log(obj[sym]); // semlinker 
```

###  2.5、Array 类型

1. 联合类型

   ```typescript
   let list:(number | string)[] = [1,2,3,'a','b','c']
   ```

2. 泛型

   ```typescript
   let list1:Array<number | string> = [1,2,3,'a','b','c']
   ```

### 2.6、Tuple 类型

在 JavaScript 中是没有元组的，元组是 TypeScript 中特有的类型,**长度和内容类型都限制好的数组**

```typescript
lettupleType: [string, boolean];
tupleType= ["semlinker", true];
console.log(tupleType[0]); // semlinker
console.log(tupleType[1]); // true
```

1. 类型不匹配

   ```typescript
   tupleType = [true, "semlinker"];
   [0]: Type 'true' is not assignable to type 'string'.
   [1]: Type 'string' is not assignable to type 'boolean'.
   ```

2. 长度不匹配

   ```typescript
   tupleType = ["semlinker"];
   Property '1' is missing in type '[string]' but required in type '[string, boolean]'.
   ```

3. 元组越界

   ```typescript
   lettupleType: [string, boolean];
   tupleType= ["semlinker", true];
   tupleType.push('wzj')  // 越界也只能添加元组约定的类型
   ```

### 2.7、Enum 类型

1. 数字枚举

   ```typescript
   enum Direction {
     NORTH,
     SOUTH,
     EAST,
     WEST,
   }
   
   let dir: Direction = Direction.NORTH;
   ```

   默认情况下，NORTH 的初始值为 0，其余的成员会从 1 开始自动增长。换句话说，Direction.SOUTH 的值为 1，Direction.EAST 的值为 2，Direction.WEST 的值为 3。

   以上的枚举示例经编译后，对应的 ES5 代码如下：

   ```javascript
   "use strict";
   var Direction;
   (function (Direction) {
     Direction[(Direction["NORTH"] = 0)] = "NORTH";
     Direction[(Direction["SOUTH"] = 1)] = "SOUTH";
     Direction[(Direction["EAST"] = 2)] = "EAST";
     Direction[(Direction["WEST"] = 3)] = "WEST";
   })(Direction || (Direction = {}));
   var dir = Direction.NORTH;
   ```

   当然我们也可以设置 NORTH 的初始值，比如：

   ```typescript
   enum Direction {
     NORTH = 3,
     SOUTH,
     EAST,
     WEST,
   }
   ```

   NORTH 的初始值为 3，其余的成员会从 4 开始自动增长，Direction.SOUTH 的值为 4，Direction.EAST 的值为 5，Direction.WEST 的值为 6。

2. 字符串枚举在 TypeScript 2.4 版本，允许我们使用字符串枚举。在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。

   ```typescript
   enum Direction {
     NORTH = "NORTH",
     SOUTH = "SOUTH",
     EAST = "EAST",
     WEST = "WEST",
   }
   ```

   以上代码对应的 ES5 代码如下：

   ```typescript
   "use strict";
   var Direction;
   (function (Direction) {
       Direction["NORTH"] = "NORTH";
       Direction["SOUTH"] = "SOUTH";
       Direction["EAST"] = "EAST";
       Direction["WEST"] = "WEST";
   })(Direction || (Direction = {}));
   ```

   通过观察数字枚举和字符串枚举的编译结果，我们可以知道数字枚举除了支持 **从成员名称到成员值** 的普通映射之外，它还支持 **从成员值到成员名称** 的反向映射：

   ```typescript
   enum Direction {
     NORTH,
     SOUTH,
     EAST,
     WEST,
   }
   
   let dirName = Direction[0]; // NORTH
   let dirVal = Direction["NORTH"]; // 0
   ```

   另外，对于纯字符串枚举，我们不能省略任何初始化程序。而数字枚举如果没有显式设置值时，则会使用默认规则进行初始化。

3. 常量枚举除了数字枚举和字符串枚举之外，还有一种特殊的枚举 —— 常量枚举。它是使用 `const` 关键字修饰的枚举，常量枚举会使用内联语法，不会为枚举类型编译生成任何 JavaScript。为了更好地理解这句话，我们来看一个具体的例子：

   ```typescript
   const enum Direction {
     NORTH,
     SOUTH,
     EAST,
     WEST,
   }
   
   let dir: Direction = Direction.NORTH;
   ```

   以上代码对应的 ES5 代码如下：

   ```javascript
   "use strict";
   var dir = 0 /* NORTH */;
   ```

4. 异构枚举异构枚举的成员值是数字和字符串的混合：

   ```typescript
   enum Enum {
     A,
     B,
     C = "C",
     D = "D",
     E = 8,
     F,
   }
   ```

   以上代码对于的 ES5 代码如下：

   ```typescript
   "use strict";
   var Enum;
   (function (Enum) {
       Enum[Enum["A"] = 0] = "A";
       Enum[Enum["B"] = 1] = "B";
       Enum["C"] = "C";
       Enum["D"] = "D";
       Enum[Enum["E"] = 8] = "E";
       Enum[Enum["F"] = 9] = "F";
   })(Enum || (Enum = {}));
   ```

   通过观察上述生成的 ES5 代码，我们可以发现数字枚举相对字符串枚举多了 “反向映射”：

   ```javascript
   console.log(Enum.A) //输出：0
   console.log(Enum[0]) // 输出：A
   ```

### 2.8、Null 和 Undefined 类型

1. 严格模式

   ```typescript
   // null 只能复制给 null, undefined 只能复制给 undefined
   let u: undefined = undefined;
   let n: null = null;
   ```

2. 非严格模式

   ```typescript
   // null和undefined是任何类型的子类型
   let str: string;
   str = undefined;
   ```

### 2.9、Void 类型

表示空类型，只接受`null`和`undefined`，常用于函数返回值

```typescript
// 声明函数返回值为void
function warnUser(): void {
  console.log("This is my warning message");
}

以上代码编译生成的 ES5 代码如下：
"use strict";
function warnUser() {
  console.log("This is my warning message");
}
```

1. 严格模式

   ```typescript
   // 严格模式下只能为undefined(函数不写返回值默认返回undefined)
   let v:void;
   v = undefined;
   ```

2. 非严格模式

   ```typescript
   // 非严格模式下null和undefined都可以
   let v:void;
   v = undefined;
   v = null;
   ```

### 2.10、Unkonwn类型

就像所有类型都可以赋值给 `any`，所有类型也都可以赋值给 `unknown`。这使得 `unknown` 成为 TypeScript 类型系统的另一种顶级类型（另一种是 `any`）。下面我们来看一下 `unknown` 类型的使用示例：

```typescript
let value: unknown;

value = true; // OK
value = 42; // OK
value = "Hello World"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = new TypeError(); // OK
value = Symbol("type"); // OK
```

对 `value` 变量的所有赋值都被认为是类型正确的。但是，当我们尝试将类型为 `unknown` 的值赋值给其他类型的变量时会发生什么？

```typescript
let value: unknown;

let value1: unknown = value; // OK
let value2: any = value; // OK
let value3: boolean = value; // Error
let value4: number = value; // Error
let value5: string = value; // Error
let value6: object = value; // Error
let value7: any[] = value; // Error
let value8: Function = value; // Error
```

`unknown` 类型只能被赋值给 `any` 类型和 `unknown` 类型本身。直观地说，这是有道理的：只有能够保存任意类型值的容器才能保存 `unknown` 类型的值。毕竟我们不知道变量 `value` 中存储了什么类型的值。

现在让我们看看当我们尝试对类型为 `unknown` 的值执行操作时会发生什么。以下是我们在之前 `any` 章节看过的相同操作：

```typescript
let value: unknown;

value.foo.bar; // Error
value.trim(); // Error
value(); // Error
new value(); // Error
value[0][1]; // Error
```

将 `value` 变量类型设置为 `unknown` 后，这些操作都不再被认为是类型正确的。通过将 `any` 类型改变为 `unknown` 类型，我们已将允许所有更改的默认设置，更改为禁止任何更改。

### 2.11、Never类型

永远不，是任何类型的子类型，可以复制给任何类型

1. 错误

   ```typescript
   function error(message: string): never {
     throw new Error(message);
   }
   ```

2. 死循环

   ```typescript
   function infiniteLoop(): never {
     while (true) {}
   }
   ```

3. 类型判断时

   ```typescript
   type Foo = string | number;
   
   function controlFlowAnalysisWithNever(foo: Foo) {
     if (typeof foo === "string") {
       // 这里 foo 被收窄为 string 类型
     } else if (typeof foo === "number") {
       // 这里 foo 被收窄为 number 类型
     } else {
       // foo 在这里是 never
       const check: never = foo;
     }
   }
   ```

   ### 2.12、对象类型（非原始数据类型）
   
   1. object
   
      object 类型是：TypeScript 2.2 引入的新类型，它用于表示非原始类型。
   
      ```typescript
      // node_modules/typescript/lib/lib.es5.d.ts
      interface ObjectConstructor {
        create(o: object | null): any;
        // ...
      }
      
      const proto = {};
      
      Object.create(proto);     // OK
      Object.create(null);      // OK
      Object.create(undefined); // Error
      Object.create(1337);      // Error
      Object.create(true);      // Error
      Object.create("oops");    // Error
      ```
   
   2. ObjectObject 类型：它是所有 Object 类的实例的类型，它由以下两个接口来定义：
   
      - Object 接口定义了 Object.prototype 原型对象上的属性；
   
      ```typescript
      // node_modules/typescript/lib/lib.es5.d.ts
      interface Object {
        constructor: Function;
        toString(): string;
        toLocaleString(): string;
        valueOf(): Object;
        hasOwnProperty(v: PropertyKey): boolean;
        isPrototypeOf(v: Object): boolean;
        propertyIsEnumerable(v: PropertyKey): boolean;
      }
      ```
   
      - ObjectConstructor 接口定义了 Object 类的属性。
   
      ```typescript
      // node_modules/typescript/lib/lib.es5.d.ts
      interface ObjectConstructor {
        /** Invocation via `new` */
        new(value?: any): Object;
        /** Invocation via function calls */
        (value?: any): any;
        readonly prototype: Object;
        getPrototypeOf(o: any): any;
        // ···
      }
      
      declare var Object: ObjectConstructor;
      ```
   
      Object 类的所有实例都继承了 Object 接口中的所有属性。
   
   3. {} 类型描述了一个没有成员的对象。当你试图访问这样一个对象的任意属性时，TypeScript 会产生一个编译时错误。
   
      ```typescript
      // Type {}
      const obj = {};
      
      // Error: Property 'prop' does not exist on type '{}'.
      obj.prop = "semlinker";
      复制代码
      ```
   
      但是，你仍然可以使用在 Object 类型上定义的所有属性和方法，这些属性和方法可通过 JavaScript 的原型链隐式地使用：
   
      ```typescript
      // Type {}
      const obj = {};
      
      // "[object Object]"
      obj.toString();
      ```

## 三、断言

### 3.1、类型断言

1. 泛型语法(不推荐，容易跟jsx语法冲突)

   ```typescript
   let someValue: any = 'this type is string';
   let strLength:number = (<string>someValue).length;
   ```

2. as语法

   ```typescript
   let someValue: any = 'this type is string';
   let strLength: number = (someValue as string).length;
   ```

### 3.2、非空断言

在上下文中当类型检查器无法断定类型时，一个新的后缀表达式操作符 `!` 可以用于断言操作对象是非 null 和非 undefined 类型。**具体而言，x! 将从 x 值域中排除 null 和 undefined 。**

1. 忽略null和undefined

   ```typescript
   function myFunc(maybeString: string | null | undefined){   
       const onlyString: string = maybeString; 		// Error
       // Type 'string | null | undefined' is not assignable to type 'string'.
       // Type 'undefined' is not assignable to type 'string'.
       
       const ignoreNullAndUndefined = maybeString!;	// Ok
   }
   ```

2. 忽略函数返回的undefined

   ```typescript
   type NumGenerator = () => undefined;
   function myFunc(numGenerator: NumGenerator | undefined){
       const num = numGenerator();		// Error
       // TS2532: Object is possibly 'undefined'.
       // TS2722: Cannot invoke an object which is possibly 'undefined'.
   
       const num1 = numGenerator!();	// Ok
   }
   ```

   因为 `!` 非空断言操作符会从编译生成的 JavaScript 代码中移除，所以在实际使用的过程中，要特别注意。比如下面这个例子：

   ```typescript
   const a: number | undefined = undefined;
   const b: number = a!;
   console.log(b); 
   
   "use strict";
   const a = undefined;
   const b = a;
   console.log(b);
   ```

### 3.3、确定赋值断言

通过 `let x!: number;` 确定赋值断言，TypeScript 编译器就会知道该属性会被明确地赋值

```typescript
let x: number;
init()
console.log(x);		// Error

let x!: number;
console.log(x);		// Ok
// TS2454: Variable 'x' is used before being assigned.
function init(){
  x = 10
}
```

## 四、类

### 4.1 属性修饰符

1.  public 公有属性 

2. private 私有属性

   ```js
   class Animal{
     constructor(private name: string) { // 私有属性
       this.name = name;
     }
   }
   
   class Cat extends Animal {
    constructor(name: string, age: number) {
      super(name);
      this.name = name;	// Error
    }
   }
   
   const cat = new Cat('Tom',8)
   console.log(cat.name);	// Error
   ```

3. protected 受保护的

   ```js
   class Animal{
     protected constructor(protected  name: string) { 
       this.name = name;
     }
   }
   
   class Cat extends Animal {
    constructor(name: string, age: number) {
      super(name);
      this.name = name;
    }
   }
   
   new Animal()	// Error
   const cat = new Cat('Tom',8)
   console.log(cat.name);	// Error
   ```

4. readonly

   ```js
   class Animal{
       // readonly name: string = 'abc  初始化赋值
      constructor(readonly name: string = 'abc') {
       this.name = name;	// 初始化赋值
     }
   }
   
   class Cat extends Animal {
    constructor(name: string, age: number) {
      super(name);
      this.name = name;	// Error
    }
   }
   
   const cat = new Cat('Tom',8)
   cat.name = 'kd';		// Error
   ```


## 五、接口

### 5.1、

