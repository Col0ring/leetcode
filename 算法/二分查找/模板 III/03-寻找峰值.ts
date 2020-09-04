// 递归二分
export function findPeakElement(nums: number[]): number {
  const helper = (nums: number[], left: number, right: number): number => {
    if (left === right) return left
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[mid + 1]) return helper(nums, left, mid)
    return helper(nums, mid + 1, right)
  }
  return helper(nums, 0, nums.length - 1)
}

// // 迭代二分
// export function findPeakElement(nums: number[]): number {
//   let left = 0
//   let right = nums.length - 1
//   while (left < right) {
//     const mid = Math.floor((left + right) / 2)
//     if (nums[mid] > nums[mid + 1]) {
//       right = mid
//     } else {
//       left = mid + 1
//     }
//   }
//   return left
// }
