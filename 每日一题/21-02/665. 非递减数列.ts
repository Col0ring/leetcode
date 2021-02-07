export function checkPossibility(nums: number[]): boolean {
  const n = nums.length
  for (let i = 0; i < n - 1; ++i) {
    const x = nums[i],
      y = nums[i + 1]
    if (x > y) {
      nums[i] = y
      if (isSorted(nums)) {
        return true
      }
      nums[i] = x // 复原
      nums[i + 1] = x
      return isSorted(nums)
    }
  }
  return true
}

const isSorted = (nums: number[]) => {
  const n = nums.length
  for (let i = 1; i < n; ++i) {
    if (nums[i - 1] > nums[i]) {
      return false
    }
  }
  return true
}
