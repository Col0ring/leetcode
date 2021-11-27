export class Solution {
  m: number
  n: number
  total: number
  map = new Map<number, number>()
  constructor(m: number, n: number) {
    this.m = m
    this.n = n
    this.total = m * n
  }

  flip(): number[] {
    const x = Math.floor(Math.random() * this.total)
    this.total--
    // 查找位置 x 对应的映射
    const idx = this.map.get(x) || x
    // 将位置 x 对应的映射设置为位置 total 对应的映射
    this.map.set(x, this.map.get(this.total) || this.total)
    return [Math.floor(idx / this.n), idx % this.n]
  }

  reset(): void {
    this.total = this.m * this.n
    this.map.clear()
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */
