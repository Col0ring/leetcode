const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1]
]
export function pacificAtlantic(heights: number[][]): number[][] {
  const m = heights.length
  const n = heights[0].length
  const pacific: boolean[][] = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(false))
  const atlantic: boolean[][] = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(false))

  const dfs = (row: number, col: number, ocean: boolean[][]) => {
    if (ocean[row][col]) {
      return
    }
    ocean[row][col] = true
    for (const dir of dirs) {
      const newRow = row + dir[0],
        newCol = col + dir[1]
      if (
        newRow >= 0 &&
        newRow < m &&
        newCol >= 0 &&
        newCol < n &&
        heights[newRow][newCol] >= heights[row][col]
      ) {
        dfs(newRow, newCol, ocean)
      }
    }
  }

  for (let i = 0; i < m; i++) {
    dfs(i, 0, pacific)
  }
  for (let j = 1; j < n; j++) {
    dfs(0, j, pacific)
  }
  for (let i = 0; i < m; i++) {
    dfs(i, n - 1, atlantic)
  }
  for (let j = 0; j < n - 1; j++) {
    dfs(m - 1, j, atlantic)
  }
  const result: number[][] = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        const cell = []
        cell.push(i)
        cell.push(j)
        result.push(cell)
      }
    }
  }
  return result
}
