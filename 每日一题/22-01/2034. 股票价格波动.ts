interface Value {
  key: number
  value: number
}
export class StockPrice {
  private max: Value
  private min: Value
  private lastTime: number
  private map: Map<number, number>

  constructor() {
    this.lastTime = 0
    this.map = new Map()
    this.min = {
      key: 0,
      value: Infinity
    }
    this.max = {
      key: 0,
      value: -Infinity
    }
  }

  update(timestamp: number, price: number): void {
    this.lastTime = Math.max(this.lastTime, timestamp)
    this.map.set(timestamp, price)

    if (price < this.min.value) {
      this.min = { key: timestamp, value: price }
    } else if (timestamp === this.min.key) {
      this.min = { key: timestamp, value: price }
      for (const [key, value] of this.map.entries()) {
        if (value < this.min.value) {
          this.min = { key, value }
        }
      }
    }
    if (price > this.max.value) {
      this.max = { key: timestamp, value: price }
    } else if (timestamp === this.max.key) {
      this.max = { key: timestamp, value: price }
      for (const [key, value] of this.map.entries()) {
        if (value > this.max.value) {
          this.max = { key, value }
        }
      }
    }
  }

  current(): number {
    return this.map.get(this.lastTime)!
  }

  maximum(): number {
    return this.max.value
  }

  minimum(): number {
    return this.min.value
  }
}

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */
