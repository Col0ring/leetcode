export function colorBorder(
  grid: number[][],
  row: number,
  col: number,
  color: number
): number[][] {
  const m = grid.length,
    n = grid[0].length
  const visited: boolean[][] = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(false))
  const borders: number[][] = []

  const dfs = (
    grid: number[][],
    x: number,
    y: number,
    visited: boolean[][],
    borders: number[][],
    originalColor: number
  ) => {
    const m = grid.length,
      n = grid[0].length
    let isBorder = false
    const direc = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ]
    for (let i = 0; i < 4; i++) {
      const nx = direc[i][0] + x,
        ny = direc[i][1] + y
      if (
        !(
          nx >= 0 &&
          nx < m &&
          ny >= 0 &&
          ny < n &&
          grid[nx][ny] === originalColor
        )
      ) {
        isBorder = true
      } else if (!visited[nx][ny]) {
        visited[nx][ny] = true
        dfs(grid, nx, ny, visited, borders, originalColor)
      }
    }
    if (isBorder) {
      borders.push([x, y])
    }
  }

  const originalColor = grid[row][col]
  visited[row][col] = true
  dfs(grid, row, col, visited, borders, originalColor)
  for (let i = 0; i < borders.length; i++) {
    const x = borders[i][0],
      y = borders[i][1]
    grid[x][y] = color
  }
  return grid
}
