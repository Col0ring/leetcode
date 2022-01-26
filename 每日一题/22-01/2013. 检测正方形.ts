export class DetectSquares {
  cnt = new Map<number, Map<number, number>>()
  constructor() {}

  add(point: number[]): void {
    const x = point[0],
      y = point[1]
    if (!this.cnt.has(y)) {
      this.cnt.set(y, new Map())
    }
    const yCnt = this.cnt.get(y)!
    yCnt.set(x, (yCnt.get(x) || 0) + 1)
  }

  count(point: number[]): number {
    let res = 0
    let x = point[0],
      y = point[1]
    if (!this.cnt.has(y)) {
      return 0
    }
    const yCnt = this.cnt.get(y)!
    const entries = this.cnt.entries()
    for (const [col, colCnt] of entries) {
      if (col !== y) {
        // 根据对称性，这里可以不用取绝对值
        let d = col - y
        res +=
          (colCnt.get(x) || 0) *
          (yCnt.get(x + d) || 0) *
          (colCnt.get(x + d) || 0)
        res +=
          (colCnt.get(x) || 0) *
          (yCnt.get(x - d) || 0) *
          (colCnt.get(x - d) || 0)
      }
    }
    return res
  }
}

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
