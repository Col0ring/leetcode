function searchInsert(nums: number[], target: number): number {
  if (nums[0] > target) {
    return 0
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i
    }
    if (nums[i] < target && nums[i + 1] > target) {
      return i + 1
    }
  }
  return nums.length
}
