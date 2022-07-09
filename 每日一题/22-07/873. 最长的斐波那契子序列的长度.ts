export function lenLongestFibSubseq(arr: number[]): number {
  const indices = new Map<number, number>()
  const n = arr.length
  for (let i = 0; i < n; i++) {
    indices.set(arr[i], i)
  }
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let ans = 0
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j >= 0; j--) {
      if (arr[j] * 2 <= arr[i]) {
        break
      }
      if (indices.has(arr[i] - arr[j])) {
        const k = indices.get(arr[i] - arr[j])!
        dp[j][i] = Math.max(dp[k][j] + 1, 3)
        ans = Math.max(ans, dp[j][i])
      }
    }
  }
  return ans
}
