export function fib(N: number): number {
  const mapHelper = new Map<number, number>()
  // 减少重复计算
  if (mapHelper.has(N)) {
    return mapHelper.get(N)!
  }
  if (N === 0) {
    return 0
  }
  if (N === 1) {
    return 1
  }
  const res = fib(N - 1) + fib(N - 2)
  if (!mapHelper.has(N)) {
    mapHelper.set(N, res)
  }
  return res
}
