``
// 1、元组的长度
type LengthOfTuple<T extends any[]> = T['length'];
type lengthA = LengthOfTuple<['B','F','E']>;    // 3
type lengthB = LengthOfTuple<[]>;               // 0

// 2、获取数组第一项
type FirstItem<T extends any[]> = T[0];
type startA = FirstItem<[string, number, boolean]>; // string
type startB = FirstItem<['B', 'F', 'E']>;           // 'B'

// 3、获取数组最后一项
type LastItem<T extends any[]> = T extends [...any, infer L]
? L
: never ;

type endA = LastItem<[string, number, boolean]>;    // boolean
type endB = LastItem<['B', 'F', 'E']>;              // 'E'
type endC = LastItem<[]>;                           // never
     
// 数组shift方法
type Shift<T extends any[]> = T extends [infer A, ...infer B]
? B
: T ;
type shiftA = Shift<[1,2,3]>;       // [2,3]
type shiftB = Shift<[1]>;           // []
type shiftC = Shift<[]>;            // []

// 数组push方法
type Push<T extends any[], U> = [...T, U];
type pushA = Push<[1,2,3], 4>;  // [1,2,3,4]
type pushB = Push<[1], 4>;  // [1,4]

// 元组reverse方法
type ReverseTuple<T extends any[], F extends any[] = []> = T extends [infer L, ...infer R]
? ReverseTuple<R,[ L,...F]>
: F;

type A = ReverseTuple<[string, number, boolean]>; // [boolean, number, string]


// 数组拍平
type Flat<T extends any[]> = T extends [infer L, ...infer R]
? [...(L extends any[]? Flat<L>: [L]), ...Flat<R>]
: []
;
type flatA = Flat<[1,[2,3],[4,[5,6]]]>  // [,1,2,3,4,5,6]
export {};