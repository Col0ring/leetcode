export class MyStack {
  queue1: number[] = []
  queue2: number[] = []
  constructor() {}

  push(x: number): void {
    // 后入的在前面
    this.queue1.push(x)
    while (this.queue2.length) {
      this.queue1.push(this.queue2.shift()!)
    }
    this.queue2 = this.queue1
    this.queue1 = []
  }

  pop(): number {
    return this.queue2.shift()!
  }

  top(): number {
    return this.queue2[0]
  }

  empty(): boolean {
    return this.queue1.length === 0 && this.queue2.length === 0
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
