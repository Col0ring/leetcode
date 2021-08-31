export function findRepeatNumber(nums: number[]): number {
  const obj: Record<string, boolean> = {}
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      return nums[i]
    } else {
      obj[nums[i]] = true
    }
  }
  return nums[0]
}
