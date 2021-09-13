export function numberOfBoomerangs(points: number[][]): number {
  let ans = 0
  for (const p of points) {
    const cnt = new Map<number, number>()
    for (const q of points) {
      const dis = (p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1])
      cnt.set(dis, (cnt.get(dis) || 0) + 1)
    }
    for (const [_, m] of cnt.entries()) {
      ans += m * (m - 1)
    }
  }
  return ans
}
