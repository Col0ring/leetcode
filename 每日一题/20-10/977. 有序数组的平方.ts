// 排序
// export function sortedSquares(A: number[]): number[] {
//   const ans = A.map((item) => item ** 2)
//   ans.sort((a, b) => a - b)
//   return ans
// }
// 双指针
export function sortedSquares(A: number[]): number[] {
  const n = A.length
  const ans: number[] = []
  // 因为是顺序的，所以比较第一个和最后一个
  for (let i = 0, j = n - 1, pos = n - 1; i <= j; ) {
    if (A[i] * A[i] > A[j] * A[j]) {
      ans[pos] = A[i] * A[i]
      ++i
    } else {
      ans[pos] = A[j] * A[j]
      --j
    }
    --pos
  }
  return ans
}
