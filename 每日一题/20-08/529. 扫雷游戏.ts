// dfs
export function updateBoard(board: string[][], click: number[]): string[][] {
  const rowLen = board.length
  const colLen = board[0].length
  const dirX = [0, 1, 0, -1, 1, 1, -1, -1]
  const dirY = [1, 0, -1, 0, 1, -1, 1, -1]
  const [row, col] = click
  const dfs = (row: number, col: number) => {
    let count = 0
    for (let i = 0; i < 8; i++) {
      const tx = row + dirX[i]
      const ty = col + dirY[i]
      if (tx < 0 || tx >= rowLen || ty < 0 || ty >= colLen) {
        continue
      }
      if (board[tx][ty] === 'M') {
        count++
      }
    }
    if (count > 0) {
      board[row][col] = '' + count
    } else {
      board[row][col] = 'B'
      // 递归揭露
      for (let i = 0; i < 8; i++) {
        const tx = row + dirX[i]
        const ty = col + dirY[i]
        // 这里不需要在存在 B 的时候继续扩展，因为 B 之前被点击的时候已经被扩展过了
        if (
          tx < 0 ||
          tx >= rowLen ||
          ty < 0 ||
          ty >= colLen ||
          board[tx][ty] !== 'E'
        ) {
          continue
        }
        dfs(tx, ty)
      }
    }
  }
  if (board[row][col] === 'M') {
    board[row][col] = 'X'
  } else {
    dfs(row, col)
  }
  return board
}
