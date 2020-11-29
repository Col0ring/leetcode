// 贪心
export function largestPerimeter(A: number[]): number {
  A.sort((a, b) => a - b)
  for (let i = A.length - 1; i >= 2; --i) {
    if (A[i - 2] + A[i - 1] > A[i]) {
      return A[i - 2] + A[i - 1] + A[i]
    }
  }
  return 0
}
