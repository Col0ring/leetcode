// type Foo = {
//   a: number
//   b?: string
//   c: boolean
// }
// type Simplify<T> = {
//   [P in keyof T]: T[P]
// }

// type SetOptional<T, K extends keyof T> = Simplify<
//   {
//     [P in Exclude<keyof T, K>]: T[P]
//   } &
//     {
//       [P in K]?: T[P]
//     }
// >
// // 测试用例
// type SomeOption = SetOptional<Foo, 'a' | 'b'>

// type SomeOptional = {
//   a?: number // 该属性已变成可选的
//   b?: string // 保持不变
//   c: boolean
// }

export type Foo = {
  a?: number
  b: string
  c?: boolean
}

type Simplify<T> = {
  [P in keyof T]: T[P]
}

type SetRequired<T, K extends keyof T> = Simplify<
  {
    [P in K]-?: T[P]
  } &
    {
      [P in keyof T as Exclude<P, K>]: T[P]
    }
>

// type SetRequired<T, K extends keyof T> = Simplify<
//   Pick<T, Exclude<keyof T, K>> &
//     {
//       [P in K]-?: T[P]
//     }
// >

// 测试用例
type SomeRequired = SetRequired<Foo, 'b' | 'c'>
// type SomeRequired = {
// 	a?: number;
// 	b: string; // 保持不变
// 	c: boolean; // 该属性已变成必填
// }
