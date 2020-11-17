// 桶排序
export function allCellsDistOrder(
  R: number,
  C: number,
  r0: number,
  c0: number
): number[][] {
  const ans: number[][] = []
  const getDistance = (r: number, c: number): number => {
    return Math.abs(r - r0) + Math.abs(c - c0)
  }
  const mapHelper: Record<string, [number, number][]> = {}

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      const dis = getDistance(i, j)
      if (mapHelper[dis]) {
        mapHelper[dis].push([i, j])
      } else {
        mapHelper[dis] = [[i, j]]
      }
    }
  }
  Object.keys(mapHelper).forEach((key) => {
    mapHelper[key].forEach((item) => {
      ans.push(item)
    })
  })

  return ans
}
