// api
// function removeElement(nums: number[], val: number): number {
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] === val) {
//       nums.splice(i, 1)
//     }
//   }
//   return nums.length
// }

// export function removeElement(nums: number[], val: number): number {
//   let ans = nums.length
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] === val) {
//       ans--
//       for (let j = i; j < ans; j++) {
//         nums[j] = nums[j + 1]
//       }
//     }
//   }
//   return ans
// }

export function removeElement(nums: number[], val: number): number {
  const n = nums.length
  let i = -1
  let j = 0
  while (j < n) {
    if (nums[j] !== val) {
      i++
      nums[i] = nums[j]
    }
    j++
  }
  return i + 1
}
