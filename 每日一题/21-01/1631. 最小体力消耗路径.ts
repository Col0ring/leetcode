export function minimumEffortPath(heights: number[][]): number {
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]

  const m = heights.length,
    n = heights[0].length
  let left = 0,
    right = 999999,
    ans = 0
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const queue = [[0, 0]]
    const seen = new Array(m * n).fill(0)
    seen[0] = 1
    while (queue.length) {
      const [x, y] = queue.shift()!
      for (let i = 0; i < 4; i++) {
        const nx = x + dirs[i][0]
        const ny = y + dirs[i][1]
        if (
          nx >= 0 &&
          nx < m &&
          ny >= 0 &&
          ny < n &&
          !seen[nx * n + ny] &&
          Math.abs(heights[x][y] - heights[nx][ny]) <= mid
        ) {
          queue.push([nx, ny])
          seen[nx * n + ny] = 1
        }
      }
    }
    if (seen[m * n - 1]) {
      ans = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return ans
}
