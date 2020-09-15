/**
 Do not return anything, modify board in-place instead.
 */
export function solveSudoku(board: string[][]): void {
  const hasConflit = (r: number, c: number, val: string) => {
    // 判断是否有行列和框框的冲突
    for (let i = 0; i < 9; i++) {
      if (board[i][c] === val || board[r][i] === val) {
        // 行或列里有冲突
        return true
      }
    }
    const subRowStart = Math.floor(r / 3) * 3 // 对于小框，行有三种起始索引 0、3、6
    const subColStart = Math.floor(c / 3) * 3 // 对于小框，列有三种起始索引 0、3、6
    for (let i = 0; i < 3; i++) {
      // 遍历所在的小框
      for (let j = 0; j < 3; j++) {
        if (val === board[subRowStart + i][subColStart + j]) {
          // 发现了重复数
          return true
        }
      }
    }
    return false // 没有发生冲突
  }

  const dfs = (i: number, j: number): boolean => {
    if (j == 9) {
      // 列越界，填完一行，填下一行
      i++
      j = 0
      if (i === 9) {
        return true // 都填完了，返回true
      }
    }
    if (board[i][j] !== '.') {
      return dfs(i, j + 1) // 不是空白格，递归填下一格
    }

    for (let num = 1; num <= 9; num++) {
      // 枚举出当前格的所有可填的选择
      if (hasConflit(i, j, String(num))) continue // 如果存在冲突，跳过这个选择
      board[i][j] = String(num) // 作出一个选择
      if (dfs(i, j + 1)) return true // 如果基于它，填下一格，最后可以解出数独，直接返回true
      board[i][j] = '.' // 如果基于它，填下一格，填1-9都不行，回溯，恢复为空白格
    }
    return false // 1-9，每个选择，都做不下去，返回false
  }
  dfs(0, 0)
}
