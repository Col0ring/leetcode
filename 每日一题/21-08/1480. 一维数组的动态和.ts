export function runningSum(nums: number[]): number[] {
  const n = nums.length
  for (let i = 1; i < n; i++) {
    nums[i] += nums[i - 1]
  }
  return nums
}
