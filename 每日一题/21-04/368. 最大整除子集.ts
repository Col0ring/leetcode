export function largestDivisibleSubset(nums: number[]): number[] {
  const len = nums.length
  nums.sort((a, b) => a - b)

  // 第 1 步：动态规划找出最大子集的个数、最大子集中的最大整数
  const dp: number[] = new Array(len).fill(1)
  let maxSize = 1
  let maxVal = dp[0]
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      // 题目中说「没有重复元素」很重要
      if (nums[i] % nums[j] === 0) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }

    if (dp[i] > maxSize) {
      maxSize = dp[i]
      maxVal = nums[i]
    }
  }

  // 第 2 步：倒推获得最大子集
  const res: number[] = []
  if (maxSize === 1) {
    res.push(nums[0])
    return res
  }

  for (let i = len - 1; i >= 0 && maxSize > 0; i--) {
    if (dp[i] === maxSize && maxVal % nums[i] === 0) {
      res.push(nums[i])
      maxVal = nums[i]
      maxSize--
    }
  }
  return res
}
