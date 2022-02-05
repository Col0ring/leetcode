export function getMaximumGold(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]
  let ans = 0

  const dfs = (x: number, y: number, gold: number) => {
    gold += grid[x][y]
    ans = Math.max(ans, gold)

    const rec = grid[x][y]
    grid[x][y] = 0

    for (let d = 0; d < 4; ++d) {
      const nx = x + dirs[d][0]
      const ny = y + dirs[d][1]
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] > 0) {
        dfs(nx, ny, gold)
      }
    }

    grid[x][y] = rec
  }
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] !== 0) {
        dfs(i, j, 0)
      }
    }
  }
  return ans
}
