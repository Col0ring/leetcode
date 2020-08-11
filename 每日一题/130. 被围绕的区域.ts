/**
     Do not return anything, modify board in-place instead.
    */
function solve(board: string[][]): void {
  const rowLen = board.length
  if (!rowLen) {
    return
  }
  const colLen = board[0].length
  // dfs
  const dfs = (row: number, col: number) => {
    if (
      row < 0 ||
      row >= rowLen ||
      col < 0 ||
      col >= colLen ||
      board[row][col] !== 'O'
    ) {
      return
    }
    board[row][col] = 'A'
    dfs(row + 1, col)
    dfs(row - 1, col)
    dfs(row, col + 1)
    dfs(row, col - 1)
  }
  for (let i = 0; i < rowLen; i++) {
    dfs(i, 0)
    dfs(i, colLen - 1)
  }
  for (let i = 0; i < colLen; i++) {
    dfs(0, i)
    dfs(rowLen - 1, i)
  }

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (board[i][j] === 'A') {
        board[i][j] = 'O'
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }
    }
  }
}
