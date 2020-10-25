// dp
export function longestMountain(A: number[]): number {
  const n = A.length
  if (n === 0) {
    return 0
  }
  const left = new Array(n).fill(0)
  for (let i = 1; i < n; ++i) {
    left[i] = A[i - 1] < A[i] ? left[i - 1] + 1 : 0
  }
  const right = new Array(n).fill(0)
  for (let i = n - 2; i >= 0; --i) {
    right[i] = A[i + 1] < A[i] ? right[i + 1] + 1 : 0
  }

  let ans = 0
  for (let i = 0; i < n; ++i) {
    if (left[i] > 0 && right[i] > 0) {
      ans = Math.max(ans, left[i] + right[i] + 1)
    }
  }
  return ans
}
