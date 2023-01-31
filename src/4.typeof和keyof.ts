/* typeof && keyof */

// 1、typeof获取变量的类型
// 2、keyof获取类型中所有key的联合类型
function getName(this: Person, key: PersonKey) {
    return this[key];
}
const person = { name: 'wzj', age: 30 };
type Person = typeof person;
type PersonKey = keyof Person;
getName.call(person, 'name');

export { };