// dfs
export function spiralOrder(matrix: number[][]): number[] {
  const rowLen = matrix.length
  if (!rowLen) {
    return []
  }
  const colLen = matrix[0].length
  // 记录是否访问
  const visited = new Array(rowLen)
    .fill(0)
    .map(() => new Array(colLen).fill(false))
  const total = rowLen * colLen
  const ans = new Array(total).fill(0)

  let directionIndex = 0,
    row = 0,
    column = 0
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]
  for (let i = 0; i < total; i++) {
    ans[i] = matrix[row][column]
    visited[row][column] = true
    const nextRow = row + directions[directionIndex][0],
      nextColumn = column + directions[directionIndex][1]
    if (
      !(
        0 <= nextRow &&
        nextRow < rowLen &&
        0 <= nextColumn &&
        nextColumn < colLen &&
        !visited[nextRow][nextColumn]
      )
    ) {
      directionIndex = (directionIndex + 1) % 4
    }
    row += directions[directionIndex][0]
    column += directions[directionIndex][1]
  }
  return ans
}
