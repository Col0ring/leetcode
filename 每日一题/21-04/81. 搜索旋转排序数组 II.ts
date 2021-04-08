export function search(nums: number[], target: number): boolean {
  const n = nums.length
  if (n === 0) {
    return false
  }
  if (n === 1) {
    return nums[0] === target
  }
  let l = 0,
    r = n - 1
  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    if (nums[mid] === target) {
      return true
    }
    if (nums[l] === nums[mid] && nums[mid] === nums[r]) {
      ++l
      --r
    } else if (nums[l] <= nums[mid]) {
      if (nums[l] <= target && target < nums[mid]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[n - 1]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }
  return false
}
