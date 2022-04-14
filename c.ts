interface Foo {
  [key: string]: any
  [key: number]: any
  bar(): void
}

type GetKey<V1, V2> = V1 extends V2 ? never : V2

type RemoveIndexSignature<T> = {
  // GetKey 中只要有一个是 never，那么交叉类型就是 never
  [K in keyof T as GetKey<string, K> & GetKey<number, K>]: T[K]
}
