export function maxPoints(points: number[][]): number {
  const n = points.length
  if (n <= 2) {
    return n
  }
  let ret = 0
  for (let i = 0; i < n; i++) {
    if (ret >= n - i || ret > n / 2) {
      break
    }
    const map = new Map<number, number>()
    for (let j = i + 1; j < n; j++) {
      let x = points[i][0] - points[j][0]
      let y = points[i][1] - points[j][1]
      if (x === 0) {
        y = 1
      } else if (y === 0) {
        x = 1
      } else {
        if (y < 0) {
          x = -x
          y = -y
        }
        const gcdXY = gcd(Math.abs(x), Math.abs(y))
        x /= gcdXY
        y /= gcdXY
      }
      const key = y + x * 20001
      map.set(key, (map.get(key) || 0) + 1)
    }
    let maxn = 0
    for (const num of map.values()) {
      maxn = Math.max(maxn, num + 1)
    }
    ret = Math.max(ret, maxn)
  }
  return ret
}

const gcd = (a: number, b: number): number => {
  return b != 0 ? gcd(b, a % b) : a
}
