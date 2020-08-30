// export function removeDuplicates(nums: number[]): number {
//   // 维护数组,覆盖多余的重复项
//   let j = 1
//   let count = 1
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) {
//       count++
//     } else {
//       count = 1
//     }

//     if (count <= 2) {
//       nums[j++] = nums[i]
//     }
//   }
//   return j
// }

// 优化
export function removeDuplicates(nums: number[]): number {
  let i = 0
  for (let n of nums) {
    if (i < 2 || n > nums[i - 2]) nums[i++] = n
  }
  return i
}
