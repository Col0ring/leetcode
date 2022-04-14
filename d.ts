/**
 * 将联合类型转为对应的交叉函数类型
 * @template U 联合类型
 */
type UnionToInterFunction<U> = (
  U extends any ? () => () => U : never
) extends () => infer I
  ? I
  : never

/**
 * 获取联合类型中的最后一个类型
 * @template U 联合类型
 */
type GetUnionLast<U> = UnionToInterFunction<U> extends () => infer A ? A : never

type C = GetUnionLast<number | string>
type CC = UnionToInterFunction<number | string>

type CCC = number & string
