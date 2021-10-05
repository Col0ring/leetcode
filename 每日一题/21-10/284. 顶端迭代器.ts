/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

declare class Iterator {
  hasNext(): boolean

  next(): number
}

export class PeekingIterator {
  iterator: Iterator
  nextElement: number | null
  constructor(iterator: Iterator) {
    this.iterator = iterator
    this.nextElement = this.iterator.next()
  }

  peek(): number {
    return this.nextElement || 0
  }

  next(): number {
    const ret = this.nextElement
    this.nextElement = this.iterator.hasNext() ? this.iterator.next() : null
    return ret || 0
  }

  hasNext(): boolean {
    return this.nextElement != null
  }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
