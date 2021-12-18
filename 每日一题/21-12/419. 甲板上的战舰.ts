export function countBattleships(board: string[][]): number {
  const row = board.length
  const col = board[0].length
  let ans = 0
  for (let i = 0; i < row; ++i) {
    for (let j = 0; j < col; ++j) {
      if (board[i][j] === 'X') {
        if (i > 0 && board[i - 1][j] === 'X') {
          continue
        }
        if (j > 0 && board[i][j - 1] === 'X') {
          continue
        }
        ans++
      }
    }
  }
  return ans
}
