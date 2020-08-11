export function longestCommonPrefix(strs: string[]): string {
  let str = strs[0]
  if (!str) {
    return ''
  }
  let prefix = ''
  for (let i = 0; i < str.length; i++) {
    let flag = true
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== str[i]) {
        flag = false
        break
      }
    }
    if (flag) {
      prefix += str[i]
    } else {
      break
    }
  }
  return prefix
}
