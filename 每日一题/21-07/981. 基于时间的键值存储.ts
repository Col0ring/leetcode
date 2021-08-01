// hash + 二分
export class TimeMap {
  map: Map<string, [string, number][]>
  constructor() {
    this.map = new Map()
  }

  set(key: string, value: string, timestamp: number): void {
    if (this.map.has(key)) {
      this.map.get(key)!.push([value, timestamp])
    } else {
      this.map.set(key, [[value, timestamp]])
    }
  }

  get(key: string, timestamp: number): string {
    let pairs = this.map.get(key)
    if (pairs) {
      let low = 0,
        high = pairs.length - 1
      while (low <= high) {
        let mid = Math.floor((high - low) / 2) + low
        if (pairs[mid][1] > timestamp) {
          high = mid - 1
        } else if (pairs[mid][1] < timestamp) {
          low = mid + 1
        } else {
          return pairs[mid][0]
        }
      }
      if (high >= 0) {
        return pairs[high][0]
      }
      return ''
    }
    return ''
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
