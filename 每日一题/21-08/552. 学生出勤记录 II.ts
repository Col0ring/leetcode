export function checkRecord(n: number): number {
  const MOD = 10 ** 9 + 7
  let dp: number[][] = new Array(2).fill(0).map(() => new Array(3).fill(0)) // A 的数量，结尾连续 L 的数量
  dp[0][0] = 1
  for (let i = 1; i <= n; i++) {
    const dpNew: number[][] = new Array(2)
      .fill(0)
      .map(() => new Array(3).fill(0))
    // 以 P 结尾的数量
    for (let j = 0; j <= 1; j++) {
      for (let k = 0; k <= 2; k++) {
        dpNew[j][0] = (dpNew[j][0] + dp[j][k]) % MOD
      }
    }
    // 以 A 结尾的数量
    for (let k = 0; k <= 2; k++) {
      dpNew[1][0] = (dpNew[1][0] + dp[0][k]) % MOD
    }
    // 以 L 结尾的数量
    for (let j = 0; j <= 1; j++) {
      for (let k = 1; k <= 2; k++) {
        dpNew[j][k] = (dpNew[j][k] + dp[j][k - 1]) % MOD
      }
    }
    dp = dpNew
  }
  let sum = 0
  for (let j = 0; j <= 1; j++) {
    for (let k = 0; k <= 2; k++) {
      sum = (sum + dp[j][k]) % MOD
    }
  }
  return sum
}
