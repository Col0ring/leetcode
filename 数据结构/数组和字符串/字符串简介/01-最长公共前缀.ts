export function longestCommonPrefix(strs: string[]): string {
  const len = strs.length
  if (!len) {
    return ''
  }
  let ans = ''
  let str = strs[0]
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (str[i] !== strs[j][i]) {
        return ans
      }
    }
    ans += str[i]
  }
  return ans
}
