// 二分
export function search(nums: number[], target: number): number {
  let ans = 0
  const leftIdx = binarySearch(nums, target, true)
  const rightIdx = binarySearch(nums, target, false) - 1
  if (
    leftIdx <= rightIdx &&
    rightIdx < nums.length &&
    nums[leftIdx] === target &&
    nums[rightIdx] === target
  ) {
    ans = rightIdx - leftIdx + 1
  }
  return ans
}

const binarySearch = (nums: number[], target: number, lower: boolean) => {
  let left = 0,
    right = nums.length - 1,
    ans = nums.length
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    // lower 判断下限
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1
      ans = mid
    } else {
      left = mid + 1
    }
  }
  return ans
}
