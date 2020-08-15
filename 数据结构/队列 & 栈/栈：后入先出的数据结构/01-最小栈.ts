export class MinStack {
  stack: number[] = []
  minStack: number[] = []
  constructor() {}

  push(x: number): void {
    this.stack.push(x)
    this.minStack.push(
      this.minStack.length
        ? Math.min(this.minStack[this.minStack.length - 1], x)
        : x
    )
  }

  pop(): void {
    this.stack.pop()
    this.minStack.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1]
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
