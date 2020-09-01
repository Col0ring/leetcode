// 暴力
// function minSubArrayLen(s: number, nums: number[]): number {
//   let ans = 0
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j]
//       if (sum >= s) {
//         if (ans === 0) {
//           ans = j - i + 1
//         } else {
//           ans = Math.min(ans, j - i + 1)
//         }
//         break
//       }
//     }
//   }

//   return ans
// }

// 双指针
export function minSubArrayLen(s: number, nums: number[]): number {
  let ans = 0
  let start = 0
  let end = 0
  let sum = 0
  while (end < nums.length) {
    sum += nums[end]
    while (sum >= s) {
      if (ans === 0) {
        ans = end - start + 1
      } else {
        ans = Math.min(ans, end - start + 1)
      }
      sum -= nums[start]
      start++
    }
    end++
  }
  return ans
}
