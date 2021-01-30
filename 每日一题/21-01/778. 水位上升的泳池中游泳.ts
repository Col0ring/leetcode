export function swimInWater(grid: number[][]): number {
  const n = grid.length
  let left = 0,
    right = n * n - 1
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (check(grid, mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}
const check = (grid: number[][], threshold: number) => {
  if (grid[0][0] > threshold) {
    return false
  }
  const n = grid.length
  const visited: boolean[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(false))
  visited[0][0] = true
  const queue = [[0, 0]]

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]
  while (queue.length) {
    const square = queue.shift()!
    const i = square[0],
      j = square[1]

    for (const direction of directions) {
      const ni = i + direction[0],
        nj = j + direction[1]
      if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
        if (!visited[ni][nj] && grid[ni][nj] <= threshold) {
          queue.push([ni, nj])
          visited[ni][nj] = true
        }
      }
    }
  }
  return visited[n - 1][n - 1]
}
