// 哈希
export function uniqueOccurrences(arr: number[]): boolean {
  const occur = new Map<number, number>()
  for (const x of arr) {
    if (occur.has(x)) {
      occur.set(x, occur.get(x)! + 1)
    } else {
      occur.set(x, 1)
    }
  }
  const times = new Set<number>()
  for (const [, value] of occur) {
    times.add(value)
  }
  return times.size === occur.size
}
