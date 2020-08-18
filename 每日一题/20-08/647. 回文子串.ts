// 中心拓展
// export function countSubstrings(s: string): number {
//   let ans = 0
//   let n = s.length
//   // 长度为n可以上次 2n -1 组回文中心
//   for (let i = 0; i < 2 * n - 1; i++) {
//     // 统一回文中心是奇数和偶数的情况
//     let left = i / 2
//     let right = i / 2 + (i % 2)
//     while (left >= 0 && right < n && s[left] === s[right]) {
//       left--
//       right++
//       ans++
//     }
//   }
//   return ans
// }

// 暴力法
export function countSubstrings(s: string): number {
  let ans = 0
  let n = s.length
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let left = i
      let right = j
      while (left < right) {
        if (s[left] !== s[right]) {
          break
        }
        left++
        right--
      }
      if (left >= right) {
        ans++
      }
    }
  }
  return ans
}
