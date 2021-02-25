export function transpose(matrix: number[][]): number[][] {
  const m = matrix.length,
    n = matrix[0].length
  const transposed: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(m).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      transposed[j][i] = matrix[i][j]
    }
  }
  return transposed
}
