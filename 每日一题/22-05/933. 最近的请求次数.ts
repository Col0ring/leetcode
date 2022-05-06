export class RecentCounter {
  queue: number[] = []
  constructor() {}

  ping(t: number): number {
    this.queue.push(t)
    while (this.queue[0] < t - 3000) {
      this.queue.shift()
    }
    return this.queue.length
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
