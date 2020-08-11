// function singleNumber(nums: number[]): number {
//   const setHelper = new Set<number>()
//   for (let i = 0; i < nums.length; i++) {
//     if (setHelper.has(nums[i])) {
//       setHelper.delete(nums[i])
//     } else {
//       setHelper.add(nums[i])
//     }
//   }
//   return [...setHelper][0]
// }

// 异或
export function singleNumber(nums: number[]): number {
  return nums.reduce((pre, next) => (pre ^= next), 0)
}
