export function trapRainWater(heightMap: number[][]): number {
  const m = heightMap.length
  const n = heightMap[0].length
  const dirs = [-1, 0, 1, 0, -1]
  let maxHeight = 0

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      maxHeight = Math.max(maxHeight, heightMap[i][j])
    }
  }
  const water: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      water[i][j] = maxHeight
    }
  }
  const qu: number[][] = []
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
        if (water[i][j] > heightMap[i][j]) {
          water[i][j] = heightMap[i][j]
          qu.push([i, j])
        }
      }
    }
  }
  while (qu.length) {
    const curr = qu.shift()!
    const x = curr[0]
    const y = curr[1]
    for (let i = 0; i < 4; ++i) {
      const nx = x + dirs[i],
        ny = y + dirs[i + 1]
      if (nx < 0 || nx >= m || ny < 0 || ny >= n) {
        continue
      }
      if (water[x][y] < water[nx][ny] && water[nx][ny] > heightMap[nx][ny]) {
        water[nx][ny] = Math.max(water[x][y], heightMap[nx][ny])
        qu.push([nx, ny])
      }
    }
  }

  let res = 0
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      res += water[i][j] - heightMap[i][j]
    }
  }
  return res
}
