function findDiagonalOrder(matrix: number[][]): number[] {
  const rowLen = matrix.length
  if (!rowLen) return []
  const colLen = matrix[0].length
  let isUp = true // 控制右上还是左下
  let ans: number[] = []
  let row = 0
  let col = 0
  while (row < rowLen && col < colLen) {
    ans.push(matrix[row][col])
    if (isUp) {
      if (row <= 0 || col >= colLen - 1) {
        isUp = !isUp
        if (col < colLen - 1) {
          col++
        } else {
          row++
        }
      } else {
        row--
        col++
      }
    } else {
      if (col <= 0 || row >= rowLen - 1) {
        isUp = !isUp
        if (row < rowLen - 1) {
          row++
        } else {
          col++
        }
      } else {
        row++
        col--
      }
    }
  }
  return ans
}
