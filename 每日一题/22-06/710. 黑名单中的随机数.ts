export class Solution {
  b2w = new Map<number, number>()
  bound: number
  constructor(n: number, blacklist: number[]) {
    const m = blacklist.length
    this.bound = n - m
    const black = new Set<number>()
    for (const b of blacklist) {
      if (b >= this.bound) {
        black.add(b)
      }
    }

    let w = this.bound
    for (const b of blacklist) {
      if (b < this.bound) {
        while (black.has(w)) {
          ++w
        }
        this.b2w.set(b, w)
        ++w
      }
    }
  }

  pick(): number {
    const x = Math.floor(Math.random() * this.bound)
    return this.b2w.get(x) || x
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
