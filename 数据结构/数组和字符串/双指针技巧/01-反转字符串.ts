/**
 Do not return anything, modify s in-place instead.
 */
// 如果不是原地翻转可以用自带的 api
// function reverseString(s: string[]): void {
//   const len = s.length
//   for (let i = 0; i < Math.floor(len / 2); i++) {
//     const temp = s[i]
//     s[i] = s[len - i - 1]
//     s[len - i - 1] = temp
//   }
// }

export function reverseString(s: string[]): void {
  const len = s.length
  let left = 0
  let right = len - 1
  while (left < right) {
    const temp = s[left]
    s[left] = s[right]
    s[right] = temp
    left++
    right--
  }
}
