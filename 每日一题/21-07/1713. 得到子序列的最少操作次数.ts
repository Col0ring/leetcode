export function minOperations(target: number[], arr: number[]): number {
  const n = target.length
  const pos = new Map<number, number>()
  for (let i = 0; i < n; ++i) {
    pos.set(target[i], i)
  }
  const d: number[] = []
  for (const val of arr) {
    if (pos.has(val)) {
      const idx = pos.get(val)!
      const it = binarySearch(d, idx)
      if (it !== d.length) {
        d[it] = idx
      } else {
        d.push(idx)
      }
    }
  }
  return n - d.length
}

const binarySearch = (d: number[], target: number) => {
  const size = d.length
  if (size === 0 || d[size - 1] < target) {
    return size
  }
  let low = 0,
    high = size - 1
  while (low < high) {
    const mid = Math.floor((high - low) / 2) + low
    if (d[mid] < target) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  return low
}
