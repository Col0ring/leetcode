export function singleNonDuplicate(nums: number[]): number {
  let low = 0,
    high = nums.length - 1
  while (low < high) {
    const mid = Math.floor((high - low) / 2) + low
    if (nums[mid] === nums[mid ^ 1]) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  return nums[low]
}
