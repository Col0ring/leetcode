export class MyCircularQueue {
  queue: number[]
  capacity: number
  count: number
  headIndex: number
  constructor(k: number) {
    this.queue = []
    this.capacity = k
    this.headIndex = 0
    this.count = 0
  }

  enQueue(value: number): boolean {
    if (this.count === this.capacity) {
      return false
    }
    this.queue[(this.headIndex + this.count) % this.capacity] = value
    this.count += 1
    return true
  }

  deQueue(): boolean {
    if (this.count === 0) {
      return false
    }
    this.headIndex = (this.headIndex + 1) % this.capacity
    this.count -= 1
    return true
  }

  Front(): number {
    if (this.count == 0) {
      return -1
    }
    return this.queue[this.headIndex]
  }

  Rear(): number {
    if (this.count === 0) {
      return -1
    }
    const tailIndex = (this.headIndex + this.count - 1) % this.capacity
    return this.queue[tailIndex]
  }

  isEmpty(): boolean {
    return this.count === 0
  }

  isFull(): boolean {
    return this.capacity === this.count
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
