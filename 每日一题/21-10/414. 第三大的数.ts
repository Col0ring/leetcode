// export function thirdMax(nums: number[]): number {
//   nums = [...new Set(nums)].sort((a, b) => b - a)
//   return nums.length >= 3 ? nums[2] : nums[0]
// }

// 一次遍历

export function thirdMax(nums: number[]): number {
  // a 最大，b 第二大，c 最小
  let a = -Number.MAX_VALUE,
    b = -Number.MAX_VALUE,
    c = -Number.MAX_VALUE
  for (const num of nums) {
    if (num > a) {
      c = b
      b = a
      a = num
    } else if (a > num && num > b) {
      c = b
      b = num
    } else if (b > num && num > c) {
      c = num
    }
  }
  return c === -Number.MAX_VALUE ? a : c
}
