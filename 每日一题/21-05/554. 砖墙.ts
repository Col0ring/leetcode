export function leastBricks(wall: number[][]): number {
  const countMap = new Map<number, number>()
  for (const widths of wall) {
    const n = widths.length
    let sum = 0
    for (let i = 0; i < n - 1; i++) {
      sum += widths[i]
      countMap.set(sum, (countMap.get(sum) || 0) + 1)
    }
  }
  let maxCnt = 0
  for (const c of countMap.values()) {
    maxCnt = Math.max(maxCnt, c)
  }
  return wall.length - maxCnt
}
