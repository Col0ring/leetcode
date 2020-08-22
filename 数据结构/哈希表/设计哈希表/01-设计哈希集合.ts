export class MyHashSet {
  hash: number[] = []
  constructor() {}

  add(key: number): void {
    if (!this.hash.includes(key)) {
      this.hash.push(key)
    }
  }

  remove(key: number): void {
    const index = this.hash.indexOf(key)
    if (index > -1) {
      this.hash.splice(index, 1)
    }
  }

  contains(key: number): boolean {
    return this.hash.includes(key)
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
