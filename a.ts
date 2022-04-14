interface Example {
  a: string
  b: string | number
  c: () => void
  d: {}
}

// type ConditionalPick<T, V> = {
//   [K in keyof T as T[K] extends V ? K : never]: T[K]
// }

// 这里要使用分布式条件类型，直接 T[K] 是识别不了的
type GetKey<T, K extends keyof T, V> = K extends any
  ? T[K] extends V
    ? K
    : never
  : never

type ConditionalPick<T, V> = {
  [P in GetKey<T, keyof T, V>]: T[P]
}

// 测试用例：
type StringKeysOnly = ConditionalPick<Example, string>
//=> {a: string}
