// dp
export function stoneGame(piles: number[]): boolean {
  const length = piles.length
  const dp: number[][] = new Array(length)
    .fill(0)
    .map(() => new Array(length).fill(0))
  for (let i = 0; i < length; i++) {
    dp[i][i] = piles[i]
  }
  for (let i = length - 2; i >= 0; i--) {
    for (let j = i + 1; j < length; j++) {
      dp[i][j] = Math.max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1])
    }
  }
  return dp[0][length - 1] > 0
}
