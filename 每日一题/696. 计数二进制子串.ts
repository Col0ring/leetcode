/*
    将相邻的数字用数组保存起来，将其后者进行最小值比较，最小值就是这两个中能够获得的字串数量
*/

// function countBinarySubstrings(s: string): number {
//   const counts = []
//   let i = 0
//   while (i < s.length) {
//     const num = s[i]
//     let count = 0
//     while (i < s.length && s[i] === num) {
//       i++
//       count++
//     }
//     counts.push(count)
//   }
//   let ans = 0
//   for (let i = 0; i < counts.length - 1; i++) {
//     ans += Math.min(counts[i], counts[i + 1])
//   }

//   return ans
// }

// 不用数组用 last 维护
function countBinarySubstrings(s: string): number {
  let ptr = 0,
    n = s.length,
    last = 0,
    ans = 0
  while (ptr < n) {
    const c = s.charAt(ptr)
    let count = 0
    while (ptr < n && s.charAt(ptr) === c) {
      ++ptr
      ++count
    }
    ans += Math.min(count, last)
    last = count
  }
  return ans
}
