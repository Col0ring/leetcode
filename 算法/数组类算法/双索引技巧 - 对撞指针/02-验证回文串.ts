// 先将其他的去掉
// export function isPalindrome(s: string): boolean {
//   s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
//   // 可以换成双指针加减
//   for (let i = 0; i < Math.floor(s.length / 2); i++) {
//     if (s[i] !== s[s.length - 1 - i]) {
//       return false
//     }
//   }
//   return true
// }

// 在原字符串上直接判断
export function isPalindrome(s: string): boolean {
  const n = s.length
  let left = 0,
    right = n - 1
  while (left < right) {
    // 不是字母或数字
    while (left < right && /[^0-9a-zA-Z]/g.test(s.charAt(left))) {
      ++left
    }
    while (left < right && /[^0-9a-zA-Z]/g.test(s.charAt(right))) {
      --right
    }
    if (left < right) {
      if (s.charAt(left).toLowerCase() !== s.charAt(right).toLowerCase()) {
        return false
      }
      ++left
      --right
    }
  }
  return true
}
