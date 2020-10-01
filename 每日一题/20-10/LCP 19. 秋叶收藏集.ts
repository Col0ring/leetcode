// 动态规划
export function minimumOperations(leaves: string): number {
  const len = leaves.length
  // 初始状态不可能为 2, 3，设置为 Infinity
  let dp = [leaves[0] === 'r' ? 0 : 1, Number.MAX_VALUE, Number.MAX_VALUE]

  for (let i = 1; i < len; i++) {
    const isRed = leaves[i] === 'r'
    dp = [
      dp[0] + (isRed ? 0 : 1),
      Math.min(dp[0], dp[1]) + (isRed ? 1 : 0),
      Math.min(dp[1], dp[2]) + (isRed ? 0 : 1)
    ]
  }

  return dp[2]
}
