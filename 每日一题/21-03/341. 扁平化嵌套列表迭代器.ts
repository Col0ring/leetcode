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

class NestedInteger {
  constructor(value?: number) {}

  // @ts-ignore
  isInteger(): boolean {}
  // @ts-ignore
  getInteger(): number | null {}

  setInteger(value: number) {}

  add(elem: NestedInteger) {}
  // @ts-ignore
  getList(): NestedInteger[] {}
}

export class NestedIterator {
  vals: number[] = []
  constructor(nestedList: NestedInteger[]) {
    this.dfs(nestedList)
  }

  // 直接 dfs
  private dfs(nestedList: NestedInteger[]) {
    for (const nest of nestedList) {
      if (nest.isInteger()) {
        this.vals.push(nest.getInteger()!)
      } else {
        this.dfs(nest.getList())
      }
    }
  }

  hasNext(): boolean {
    return this.vals.length > 0
  }

  next(): number {
    const val = this.vals[0]
    this.vals = this.vals.slice(1)
    return val
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */
