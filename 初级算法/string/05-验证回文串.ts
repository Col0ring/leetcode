export function isPalindrome(s: string): boolean {
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  // 可以换成双指针加减
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false
    }
  }
  return true
}
