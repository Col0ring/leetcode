// 滑动窗口
export function longestDupSubstring(s: string): string {
  let maxStr = '',
    curStr = ''
  for (let i = 0, j = 0; i < s.length; i++) {
    curStr = curStr.replace(s[i - 1], '')
    while (curStr.length <= maxStr.length && j < s.length) {
      ;(curStr += s[j]), j++
      if (curStr.length > maxStr.length && s.lastIndexOf(curStr) > i)
        maxStr = curStr
    }
  }
  return maxStr
}
