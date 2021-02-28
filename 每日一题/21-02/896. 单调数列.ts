// 通过一次遍历
export function isMonotonic(A: number[]): boolean {
  let inc = true,
    dec = true
  const n = A.length
  for (let i = 0; i < n - 1; ++i) {
    if (A[i] > A[i + 1]) {
      inc = false
    }
    if (A[i] < A[i + 1]) {
      dec = false
    }
  }
  return inc || dec
}
