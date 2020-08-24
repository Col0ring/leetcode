// export function lengthOfLongestSubstring(s: string): number {
//   let ans = s ? 1 : 0
//   let len = s.length

//   for (let i = 0; i < len; i++) {
//     let nowNum = 1
//     let nowStart = i
//     for (let j = i + 1; j < len; j++) {
//       if (s.slice(nowStart, nowStart + nowNum).indexOf(s[j]) !== -1) {
//         if (nowNum > ans) {
//           ans = nowNum
//         }
//         break
//       } else {
//         nowNum++
//         if (j === len - 1) {
//           if (nowNum > ans) {
//             ans = nowNum
//           }
//         }
//       }
//     }
//   }
//   return ans
// }
export function lengthOfLongestSubstring(s: string): number {
  let res = 0
  let arr: string[] = []
  for (let i = 0; i < s.length; i++) {
    if (arr.includes(s[i])) {
      arr.shift()
      i--
    } else {
      arr.push(s[i])
      res = Math.max(res, arr.length)
    }
  }
  return res
}
