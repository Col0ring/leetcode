// // api
// export function search(nums: number[], target: number): number {
//   return nums.indexOf(target)
// }

// 二分
export function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    if (nums[mid] === target) {
      return mid
    }
    if (target < nums[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}
