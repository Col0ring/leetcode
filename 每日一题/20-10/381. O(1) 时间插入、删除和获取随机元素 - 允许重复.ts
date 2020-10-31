// 哈希表
export class RandomizedCollection {
  d: Map<number, Set<number>>
  v: number[]
  constructor() {
    this.d = new Map()
    this.v = []
  }

  insert(val: number): boolean {
    !this.d.has(val) && this.d.set(val, new Set())
    this.d.get(val)?.add(this.v.length)
    this.v.push(val)
    return this.d.get(val)?.size === 1
  }

  remove(val: number): boolean {
    if (!this.d.has(val)) {
      return false
    }
    let i: number = this.d.get(val)?.keys().next().value
    this.d.get(val)?.delete(i)
    this.v[i] = this.v[this.v.length - 1]
    this.v.pop()
    this.d.get(this.v[i])?.delete(this.v.length)
    i < this.v.length && this.d.get(this.v[i])?.add(i)
    !this.d.get(val)?.size && this.d.delete(val)
    return true
  }

  getRandom(): number {
    return this.v[Math.floor(Math.random() * this.v.length)]
  }
}
