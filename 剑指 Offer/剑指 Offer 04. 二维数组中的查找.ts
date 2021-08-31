// 线性查找
export function findNumberIn2DArray(
  matrix: number[][],
  target: number
): boolean {
  const rows = matrix.length
  if (!rows) {
    return false
  }
  const cols = matrix[0].length
  let row = 0,
    col = cols - 1
  while (row < rows && col >= 0) {
    const num = matrix[row][col]
    if (num === target) {
      return true
    } else if (num > target) {
      col--
    } else {
      row++
    }
  }

  return false
}

// 暴力就不写了
