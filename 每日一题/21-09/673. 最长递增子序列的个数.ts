export function findNumberOfLIS(nums: number[]): number {
  let n = nums.length,
    maxLen = 0,
    ans = 0
  const dp: number[] = new Array(n).fill(0)
  const cnt: number[] = new Array(n).fill(0)
  for (let i = 0; i < n; ++i) {
    dp[i] = 1
    cnt[i] = 1
    for (let j = 0; j < i; ++j) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1
          cnt[i] = cnt[j] // 重置计数
        } else if (dp[j] + 1 === dp[i]) {
          cnt[i] += cnt[j]
        }
      }
    }
    if (dp[i] > maxLen) {
      maxLen = dp[i]
      ans = cnt[i] // 重置计数
    } else if (dp[i] === maxLen) {
      ans += cnt[i]
    }
  }
  return ans
}
