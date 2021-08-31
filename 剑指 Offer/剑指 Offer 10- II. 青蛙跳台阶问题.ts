export function numWays(n: number): number {
  const mod = 1000000007
  // f(0)=1 , f(1)=1 , f(2)=2 ；
  const dp: number[] = []
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      dp.push(1)
    } else if (i === 1) {
      dp.push(1)
    } else {
      dp.push((dp[i - 1] + dp[i - 2]) % mod)
    }
  }

  return dp[n - 1]
}
