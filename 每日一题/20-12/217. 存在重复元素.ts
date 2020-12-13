export function containsDuplicate(nums: number[]): boolean {
  const setHelper = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (setHelper.has(nums[i])) {
      return true
    } else {
      setHelper.add(nums[i])
    }
  }
  return false
}
