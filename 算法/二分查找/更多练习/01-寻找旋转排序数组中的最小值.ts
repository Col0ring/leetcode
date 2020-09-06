// 暴力
// function findMin(nums: number[]): number {
//   const arr = nums
//   arr.sort((a, b) => a - b)
//   return arr[0]
// }

// 遍历法
// function findMin(nums: number[]): number {
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i - 1] > nums[i]) {
//       return nums[i]
//     }
//   }
//   return nums[0]
// }

// 二分
export function findMin(nums: number[]): number {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    if (nums[left] < nums[right]) {
      break
    }
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return nums[left]
}
