/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

declare class NestedInteger {
  constructor(value?: number)

  isInteger(): boolean

  getInteger(): number | null

  setInteger(value: number): void

  add(elem: NestedInteger): void

  getList(): NestedInteger[]
}

const isDigit = (ch: string) => {
  return parseFloat(ch).toString() === 'NaN' ? false : true
}

export function deserialize(s: string): NestedInteger {
  let index = 0
  const dfs = (s: string) => {
    if (s[index] === '[') {
      index++
      const ni = new NestedInteger()
      while (s[index] !== ']') {
        ni.add(dfs(s))
        if (s[index] === ',') {
          index++
        }
      }
      index++
      return ni
    } else {
      let negative = false
      if (s[index] === '-') {
        negative = true
        index++
      }
      let num = 0
      while (index < s.length && isDigit(s[index])) {
        num = num * 10 + s[index].charCodeAt(0) - '0'.charCodeAt(0)
        index++
      }
      if (negative) {
        num *= -1
      }
      return new NestedInteger(num)
    }
  }
  return dfs(s)
}
