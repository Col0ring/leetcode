// // dfs
// export function exist(board: string[][], word: string): boolean {
//   let hasWord = false
//   const rowLen = board.length
//   if (!rowLen) {
//     return false
//   }
//   const colLen = board[0].length
//   if (!colLen) {
//     return false
//   }
//   const len = word.length
//   const visited: boolean[][] = new Array(rowLen)
//     .fill(0)
//     .map(() => new Array(colLen).fill(false))
//   const dfs = (row: number, col: number, index: number) => {
//     if(hasWord) {
//         return true
//     }
//     if (index === len) {
//       hasWord = true
//       return
//     }
//     if (
//       row < 0 ||
//       row >= rowLen ||
//       col < 0 ||
//       col >= colLen ||
//       visited[row][col] ||
//       word[index] !== board[row][col]
//     ) {
//       return
//     }
//     visited[row][col] = true
//     dfs(row, col + 1, index + 1)
//     dfs(row, col - 1, index + 1)
//     dfs(row + 1, col, index + 1)
//     dfs(row - 1, col, index + 1)
//     visited[row][col] = false
//   }

//   for (let row = 0; row < rowLen; row++) {
//     for (let col = 0; col < colLen; col++) {
//       dfs(row, col, 0)
//      if (hasWord) {
//        return hasWord
//       }
//     }
//   }
//    return false
// }

// 节省空间
export function exist(board: string[][], word: string): boolean {
  let hasWord = false
  const rowLen = board.length
  if (!rowLen) {
    return false
  }
  const colLen = board[0].length
  if (!colLen) {
    return false
  }
  const len = word.length

  const dfs = (row: number, col: number, index: number) => {
    if (hasWord) {
      return
    }
    if (index === len) {
      hasWord = true
      return
    }
    if (
      row < 0 ||
      row >= rowLen ||
      col < 0 ||
      col >= colLen ||
      word[index] !== board[row][col]
    ) {
      return
    }
    board[row][col] = '\0'
    dfs(row, col + 1, index + 1)
    dfs(row, col - 1, index + 1)
    dfs(row + 1, col, index + 1)
    dfs(row - 1, col, index + 1)
    board[row][col] = word[index]
  }

  for (let row = 0; row < rowLen; row++) {
    for (let col = 0; col < colLen; col++) {
      dfs(row, col, 0)
      if (hasWord) {
        return hasWord
      }
    }
  }
  return false
}
