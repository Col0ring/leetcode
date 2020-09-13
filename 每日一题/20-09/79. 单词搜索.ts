function exist(board: string[][], word: string): boolean {
  const rowLen = board.length
  if (rowLen === 0) {
    return false
  }
  const colLen = board[0].length
  const visited = new Array(rowLen)
  for (let i = 0; i < visited.length; ++i) {
    visited[i] = new Array(colLen).fill(false)
  }

  const dfs = (row: number, col: number, index: number): boolean => {
    if (row >= 0 && row <= rowLen - 1 && col >= 0 && col <= colLen - 1) {
      if (board[row][col] !== word[index] || visited[row][col]) {
        return false
      }
      if (index === word.length - 1) {
        return true
      }
      visited[row][col] = true
      const res =
        dfs(row + 1, col, index + 1) ||
        dfs(row - 1, col, index + 1) ||
        dfs(row, col + 1, index + 1) ||
        dfs(row, col - 1, index + 1)
      visited[row][col] = false
      return res
    }
    return false
  }
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      const ans = dfs(i, j, 0)
      if (ans) {
        return true
      }
    }
  }

  return false
}
