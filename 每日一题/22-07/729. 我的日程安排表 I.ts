export class MyCalendar {
  booked: [number, number][] = []
  constructor() {}

  book(start: number, end: number): boolean {
    for (const arr of this.booked) {
      let l = arr[0],
        r = arr[1]
      if (l < end && start < r) {
        return false
      }
    }
    this.booked.push([start, end])
    return true
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
