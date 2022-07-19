export class MyCalendarTwo {
  booked: number[][] = []
  overlaps: number[][] = []
  constructor() {}

  book(start: number, end: number): boolean {
    for (const arr of this.overlaps) {
      let l = arr[0],
        r = arr[1]
      if (l < end && start < r) {
        return false
      }
    }
    for (const arr of this.booked) {
      let l = arr[0],
        r = arr[1]
      if (l < end && start < r) {
        this.overlaps.push([Math.max(l, start), Math.min(r, end)])
      }
    }
    this.booked.push([start, end])
    return true
  }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
