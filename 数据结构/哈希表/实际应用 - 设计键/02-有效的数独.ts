export function isValidSudoku(board: string[][]): boolean {
  // 判断行和列
  const rowSet = new Set<string>()
  const colSet = new Set<string>()
  for (let i = 0; i < 9; i++) {
    rowSet.clear()
    colSet.clear()
    for (let j = 0; j < 9; j++) {
      if (rowSet.has(board[j][i])) {
        return false
      } else {
        if (board[j][i] !== '.') {
          rowSet.add(board[j][i])
        }
      }
      if (colSet.has(board[i][j])) {
        return false
      } else {
        if (board[i][j] !== '.') {
          colSet.add(board[i][j])
        }
      }
    }
  }
  // 判断 3*3 网格
  const boxSet = new Set<string>()
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      boxSet.clear()
      let m = i
      let n = j
      while (m < i + 3) {
        while (n < j + 3) {
          if (boxSet.has(board[m][n])) {
            return false
          } else {
            if (board[m][n] !== '.') {
              boxSet.add(board[m][n])
            }
          }
          n++
        }
        m++
        n = j
      }
    }
  }

  return true
}
