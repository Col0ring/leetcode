export function pivotIndex(nums: number[]): number {
  let left = 0
  const sum = nums.reduce((res, next) => res + next, 0)
  for (let i = 0; i < nums.length; i++) {
    if (left === sum - nums[i] - left) {
      return i
    }
    left += nums[i]
  }
  return -1
}
