export class Solution {
  private sum = 0
  private n = 0
  private preSum: number[] = []
  constructor(w: number[]) {
    this.sum = w.reduce((acc, cur) => acc + cur)
    this.n = w.length
    this.preSum = [w[0]]
    for (let i = 1; i < this.n; i++) {
      this.preSum[i] = this.preSum[i - 1] + w[i]
    }
  }

  pickIndex(): number {
    const random = Math.random()
    for (let i = 0; i < this.n; i++) {
      if (this.preSum[i] / this.sum > random) {
        return i
      }
    }
    return 0
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
