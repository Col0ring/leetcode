export class MyHashMap {
  hash: { key: number; value: number }[] = []
  constructor() {}
  getIndex(key: number) {
    return this.hash.findIndex((item) => item.key === key)
  }
  put(key: number, value: number): void {
    const index = this.getIndex(key)
    if (index > -1) {
      this.hash[index].value = value
    } else {
      this.hash.push({ key, value })
    }
  }

  get(key: number): number {
    const index = this.getIndex(key)
    if (index > -1) {
      return this.hash[index].value
    }
    return -1
  }

  remove(key: number): void {
    const index = this.getIndex(key)
    if (index > -1) {
      this.hash.splice(index, 1)
    }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
