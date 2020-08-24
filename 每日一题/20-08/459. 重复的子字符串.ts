// 字符串匹配
// export function repeatedSubstringPattern(s: string): boolean {
//   return (s + s).indexOf(s, 1) !== s.length
// }

// 正则
// export function repeatedSubstringPattern(s: string): boolean {
//   const reg = /^(\w+)\1+$/
//   return reg.test(s)
// }
// 枚举
export function repeatedSubstringPattern(s: string): boolean {
  const len = s.length
  let i = 1
  while (i <= len / 2) {
    if (len % i == 0 && s.slice(0, i).repeat(len / i) === s) {
      return true
    }
    i++
  }
  return false
}
