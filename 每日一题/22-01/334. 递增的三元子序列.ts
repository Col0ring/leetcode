export function increasingTriplet(nums: number[]): boolean {
  const n = nums.length
  if (n < 3) {
    return false
  }
  const leftMin: number[] = new Array(n).fill(0)
  leftMin[0] = nums[0]
  for (let i = 1; i < n; i++) {
    leftMin[i] = Math.min(leftMin[i - 1], nums[i])
  }
  const rightMax = new Array(n).fill(0)
  rightMax[n - 1] = nums[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], nums[i])
  }
  for (let i = 1; i < n - 1; i++) {
    if (nums[i] > leftMin[i - 1] && nums[i] < rightMax[i + 1]) {
      return true
    }
  }
  return false
}
