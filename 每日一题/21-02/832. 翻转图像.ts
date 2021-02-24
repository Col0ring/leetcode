export function flipAndInvertImage(A: number[][]): number[][] {
  const n = A.length
  for (let i = 0; i < n; i++) {
    let left = 0,
      right = n - 1
    while (left < right) {
      if (A[i][left] === A[i][right]) {
        A[i][left] ^= 1
        A[i][right] ^= 1
      }
      left++
      right--
    }
    if (left === right) {
      A[i][left] ^= 1
    }
  }
  return A
}
