export function findPaths(
  m: number,
  n: number,
  maxMove: number,
  startRow: number,
  startColumn: number
): number {
  const mod = 10 ** 9 + 7
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]
  let outCounts = 0
  let dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0))
  dp[startRow][startColumn] = 1
  for (let i = 0; i < maxMove; i++) {
    const dpNew: number[][] = new Array(m)
      .fill(0)
      .map(() => new Array(n).fill(0))
    for (let j = 0; j < m; j++) {
      for (let k = 0; k < n; k++) {
        const count = dp[j][k]
        if (count > 0) {
          for (const direction of directions) {
            let j1 = j + direction[0],
              k1 = k + direction[1]
            if (j1 >= 0 && j1 < m && k1 >= 0 && k1 < n) {
              dpNew[j1][k1] = (dpNew[j1][k1] + count) % mod
            } else {
              outCounts = (outCounts + count) % mod
            }
          }
        }
      }
    }
    dp = dpNew
  }
  return outCounts
}
