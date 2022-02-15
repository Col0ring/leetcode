export function luckyNumbers(matrix: number[][]): number[] {
  const m = matrix.length,
    n = matrix[0].length
  const ret: number[] = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let isMin = true,
        isMax = true
      for (let k = 0; k < n; k++) {
        if (matrix[i][k] < matrix[i][j]) {
          isMin = false
          break
        }
      }
      if (!isMin) {
        continue
      }
      for (let k = 0; k < m; k++) {
        if (matrix[k][j] > matrix[i][j]) {
          isMax = false
          break
        }
      }
      if (isMax) {
        ret.push(matrix[i][j])
      }
    }
  }
  return ret
}
