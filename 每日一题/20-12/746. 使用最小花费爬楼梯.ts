export function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length
  const dp: number[] = []
  dp[0] = dp[1] = 0
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }
  return dp[n]
}
