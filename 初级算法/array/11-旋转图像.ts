/**
 Do not return anything, modify matrix in-place instead.
 */
// 本质还是找规律
function rotate(matrix: number[][]): void {
  const n = matrix.length
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  matrix.forEach((row) => row.reverse())
}
