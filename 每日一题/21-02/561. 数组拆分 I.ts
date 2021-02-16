export function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let ans = 0
  for (let i = 0; i < nums.length; i += 2) {
    ans += nums[i]
  }
  return ans
}

// export function arrayPairSum(nums: number[]): number {
//     const len = nums.length
//     let ans = 0
//     nums.sort((a, b) => a - b)
//     for (let i = 0; i < len; i += 2) {
//       // 不需要比较最小了，因为已经排序过了
//       ans += nums[i]
//     }
//     return ans
//   }
