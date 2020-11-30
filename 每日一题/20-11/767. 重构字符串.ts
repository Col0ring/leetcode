// 堆 + 贪心
class Heap<T> {
  private container: T[]
  protected compare: Function
  constructor(arr: T[] = [], fn?: Function) {
    this.container = []
    if (fn) {
      this.compare = fn
    } else {
      this.compare = (v1: T, v2: T): boolean => {
        return v1 >= v2
      }
    }

    if (Array.isArray(arr)) {
      arr.forEach(this.insert.bind(this))
    }
  }

  insert(data: T) {
    const { container } = this

    container.push(data)
    let index = container.length - 1
    while (index) {
      let parent = Math.floor((index - 1) / 2)
      if (this.compare(container[index], container[parent])) {
        break
      }
      this.swap(container, index, parent)
      index = parent
    }
  }

  extract(): T | null {
    const { container } = this
    if (!container.length) {
      return null
    }

    this.swap(container, 0, container.length - 1)
    const res = container.pop() as T
    const length = container.length
    let index = 0,
      exchange = index * 2 + 1

    while (exchange < length) {
      let right = index * 2 + 2
      if (
        right < length &&
        this.compare(container[exchange], container[right])
      ) {
        exchange = right
      }
      if (this.compare(container[exchange], container[index])) {
        break
      }
      this.swap(container, exchange, index)
      index = exchange
      exchange = index * 2 + 1
    }
    return res
  }

  private swap(arr: T[], i: number, j: number): void {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  isEmpty(): boolean {
    return this.container.length === 0
  }
  topValue(): T {
    return this.container[0]
  }
  get length(): number {
    return this.container.length
  }
}

type item = [string, number]

export function reorganizeString(S: string): string {
  if (S.length === 0) return ''
  const map = new Map<string, number>()
  for (const s of S) {
    map.set(s, map.has(s) ? map.get(s)! + 1 : 1)
  }
  const heap = new Heap<item>([], (a: item, b: item) => {
    if (a[1] === b[1]) {
      return a[0] <= b[0]
    }
    return a[1] <= b[1]
  })
  map.forEach((v, k) => {
    heap.insert([k, v])
  })
  let res = ''

  const start = heap.extract() as item
  res += start[0]
  start[1]--
  heap.insert(start)
  for (let i = 1; i < S.length; i++) {
    const temp: item[] = []
    let floor!: item
    while (!heap.isEmpty()) {
      floor = heap.extract() as item
      if (floor[0] === res[res.length - 1]) {
        temp.push(floor)
      } else {
        break
      }
    }
    if (floor[0] === res[res.length - 1]) {
      return ''
    }
    res += floor[0]
    floor[1]--
    if (floor[1] > 0) {
      heap.insert(floor)
    }
    while (temp.length > 0) {
      heap.insert(temp.pop() as item)
    }
  }

  return res
}
