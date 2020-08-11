/**
 Do not return anything, modify matrix in-place instead.
 */
export function setZeroes(matrix: number[][]): void {
  // 分别记录，然后分别清零
  const rows = new Set<number>()
  const cols = new Set<number>()
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i)
        cols.add(j)
      }
    }
  }

  // 行清零
  for (let row of rows) {
    for (let i = 0; i < matrix[row].length; i++) {
      matrix[row][i] = 0
    }
  }

  // 列清零
  for (let col of cols) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][col] = 0
    }
  }
}
