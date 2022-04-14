// dp
export function cuttingRope(n: number): number {
  // 1,2,3 这三种情况可以直接返回
  if (n < 4) return n - 1

  // 数组长度n+1，dp[0]随便设置了个0
  // n 为 1,2,3
  const dp = [0, 0, 1, 2]

  // 从4开始
  for (let i = 4; i <= n; i++) {
    // 列举出所有两段的划分情况，只用找一半，另一半是一样的，找出最大的乘积
    for (let j = 1; j <= i / 2; j++) {
      const first = Math.max(j, dp[j]) // 第一段对应的最大值
      // i - j 剩余长度
      // 比如 2， 1 1 还没有 2 大

      const second = Math.max(i - j, dp[i - j]) // 第二段对应的最大值
      // 长度为 n 的乘积
      dp[i] = Math.max(first * second, dp[i] ?? 0)
    }
  }

  return dp[n]
}
