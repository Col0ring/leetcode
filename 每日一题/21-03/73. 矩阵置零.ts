/**
 Do not return anything, modify matrix in-place instead.
 */
// 标记数组，需要开空间
export function setZeroes(matrix: number[][]): void {
  const m = matrix.length,
    n = matrix[0].length
  const row: boolean[] = new Array(m).fill(false)
  const col: boolean[] = new Array(n).fill(false)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row[i] = col[j] = true
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0
      }
    }
  }
}
