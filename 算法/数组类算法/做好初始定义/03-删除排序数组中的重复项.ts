// export function removeDuplicates(nums: number[]): number {
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i + 1] === nums[i]) {
//       nums.splice(i, 1)
//       i--
//     }
//   }

//   return nums.length
// }

export function removeDuplicates(nums: number[]): number {
  const n = nums.length
  if (n === 0 || n === 1) {
    return n
  }
  let i = 0
  let j = i + 1
  // 因为是排序好了的，所以可以直接从头开始检验，
  while (j < n) {
    if (nums[j] !== nums[i]) {
      // 指向同一元素不需要赋值
      if (i + 1 !== j) {
        nums[i + 1] = nums[j]
      }
      i++
    }
    j++
  }
  // 只需要维护 0-i 的数组
  return i + 1
}
