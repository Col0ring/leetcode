// 排序
// export function kClosest(points: number[][], K: number): number[][] {
//   if (!K) return []

//   return points
//     .sort(([x1, y1], [x2, y2]) => x1 * x1 + y1 * y1 - x2 * x2 - y2 * y2)
//     .slice(0, K)
// }

// hash 缓存
export function kClosest(points: number[][], K: number): number[][] {
  const save: Map<number[], number> = new Map()

  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i]
    save.set(points[i], x * x + y * y)
  }

  const result = points.sort((a, b) => {
    return (save.get(a) || 0) - (save.get(b) || 0)
  })

  return result.slice(0, K)
}
