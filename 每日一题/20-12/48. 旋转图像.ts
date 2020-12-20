/**
 Do not return anything, modify matrix in-place instead.
 */
export function rotate(matrix: number[][]): void {
  const n = matrix.length
  const matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix_new[j][n - i - 1] = matrix[i][j]
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = matrix_new[i][j]
    }
  }
}
// /**
//  Do not return anything, modify matrix in-place instead.
//  */
// // 本质还是找规律
// export function rotate(matrix: number[][]): void {
//     const n = matrix.length
//     for (let i = 0; i < n; i++) {
//       for (let j = i; j < n; j++) {
//         const temp = matrix[i][j]
//         matrix[i][j] = matrix[j][i]
//         matrix[j][i] = temp
//       }
//     }
//     matrix.forEach((row) => row.reverse())
//   }
