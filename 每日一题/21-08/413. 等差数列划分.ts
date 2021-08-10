export function numberOfArithmeticSlices(nums: number[]): number {
  const n = nums.length
  if (n === 1) {
    return 0
  }

  let d = nums[0] - nums[1],
    t = 0
  let ans = 0
  // 因为等差数列的长度至少为 3，所以可以从 i=2 开始枚举
  for (let i = 2; i < n; ++i) {
    if (nums[i - 1] - nums[i] === d) {
      ++t
    } else {
      d = nums[i - 1] - nums[i]
      t = 0
    }
    ans += t
  }
  return ans
}
