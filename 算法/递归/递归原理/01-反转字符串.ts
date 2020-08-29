/**
 Do not return anything, modify s in-place instead.
 */
// function reverseString(s: string[]): void {
//   s.reverse()
// }

// export function reverseString(s: string[]): void {
//   for (let i = 0; i < Math.floor(s.length / 2); i++) {
//     const temp = s[i]
//     s[i] = s[s.length - i - 1]
//     s[s.length - i - 1] = temp
//   }
// }

// 递归

export function reverseString(s: string[]): void {
  const helper = (s: string[], left: number, right: number): void => {
    if (left >= right) return
    const tmp = s[left]
    s[left++] = s[right]
    s[right--] = tmp
    helper(s, left, right)
  }
  helper(s, 0, s.length - 1)
}
