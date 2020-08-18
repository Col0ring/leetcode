// api
// export class MyQueue {
//   queue: number[] = []
//   constructor() {}

//   push(x: number): void {
//     this.queue.push(x)
//   }

//   pop(): number {
//     return this.queue.shift()!
//   }

//   peek(): number {
//     return this.queue[0]
//   }

//   empty(): boolean {
//     return this.queue.length === 0
//   }
// }

export class MyQueue {
  stack1: number[] = [] // 输入栈
  stack2: number[] = [] // 输出栈
  constructor() {}

  push(x: number): void {
    this.stack1.push(x)
  }

  pop(): number {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop()!)
      }
    }
    return this.stack2.pop()!
  }

  peek(): number {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop()!)
      }
    }
    return this.stack2[this.stack2.length - 1]
  }

  empty(): boolean {
    return this.stack1.length === 0 && this.stack2.length === 0
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
