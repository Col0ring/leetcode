// 二分
export class MedianFinder {
  list: number[] = []

  addNum(num: number): void {
    if (this.list.length === 0) {
      this.list.push(num)
      return
    }

    let left = 0
    let right = this.list.length - 1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (this.list[mid] === num) {
        this.list.splice(mid + 1, 0, num)
        return
      } else if (this.list[mid] < num) {
        left = mid + 1
      } else if (this.list[mid] > num) {
        right = mid - 1
      }
    }
    this.list.splice(right + 1, 0, num)
  }

  findMedian(): number {
    const i = Math.floor((this.list.length - 1) / 2)
    if (this.list.length % 2) {
      // 奇数，中位数索引为 /2
      return this.list[i]
    }
    return (this.list[i] + this.list[i + 1]) / 2
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
