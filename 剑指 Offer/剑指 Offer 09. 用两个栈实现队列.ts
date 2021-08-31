export class CQueue {
  stack1: number[] = [] // 输入栈
  stack2: number[] = [] // 输出栈
  constructor() {}

  appendTail(value: number): void {
    this.stack1.push(value)
  }

  deleteHead(): number {
    // 如果输出栈空了
    if (!this.stack2.length) {
      // 存在输入栈
      while (this.stack1.length) {
        // 倒退
        this.stack2.push(this.stack1.pop()!)
      }
    }
    return this.stack2.pop() || -1
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
