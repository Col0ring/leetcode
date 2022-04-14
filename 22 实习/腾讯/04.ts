export function fun(a: number[]): number {
  const n = a.length
  if (n === 0) {
    return 0
  }
  const dp: number[] = new Array(n + 1).fill(0)
  dp[1] = a[0]
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + a[i - 1])
  }
  return dp[n]
}

console.log(fun([1, 4, 5, 3]))
