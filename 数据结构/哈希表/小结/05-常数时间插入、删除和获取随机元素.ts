export class RandomizedSet {
  setHelper = new Set<number>()
  constructor() {}

  insert(val: number): boolean {
    if (this.setHelper.has(val)) {
      return false
    }
    this.setHelper.add(val)
    return true
  }

  remove(val: number): boolean {
    if (this.setHelper.has(val)) {
      this.setHelper.delete(val)
      return true
    } else {
      return false
    }
  }

  getRandom(): number {
    return [...this.setHelper][Math.floor(Math.random() * this.setHelper.size)]
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
