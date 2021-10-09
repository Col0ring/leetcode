export class SummaryRanges {
  private list: number[] = []
  private set = new Set<number>()
  constructor() {}

  addNum(val: number): void {
    if (!this.set.has(val)) {
      this.set.add(val)
      let index = 0
      while (index < this.list.length && this.list[index] < val) index++
      this.list.splice(index, 0, val)
    }
  }

  getIntervals(): number[][] {
    const resArr: number[][] = []
    let index = 0
    while (index < this.list.length) {
      const start = this.list[index]
      while (
        index < this.list.length - 1 &&
        this.list[index] + 1 === this.list[index + 1]
      )
        index++
      const end = this.list[index]
      resArr.push([start, end])
      index++
    }
    return resArr
  }
}

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */
