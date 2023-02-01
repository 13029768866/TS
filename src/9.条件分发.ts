/** 
 * ! 条件分发
 */

type ResultMessage<T> = T extends 200 | 201 | 204 | 206 ? 'success' : 'fail';
type IMessage = ResultMessage<300>;


type Conditional<T, U> = T extends U ? true : false;
type R1 = Conditional<'wzj', string>;
type R2 = Conditional<'wzj', number>;

type FormatResult<T> = T extends string
    ? string
    : T extends number
    ? number
    : never;
function sum<T extends string | number>(a: T, b: T): FormatResult<T> {
    return a + (b as any);
}

let res = sum('1', '2');

export { };