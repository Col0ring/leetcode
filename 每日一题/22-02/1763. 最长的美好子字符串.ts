// 分治
export function longestNiceSubstring(s: string): string {
  if (s.length < 2) {
    return ''
  }
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i)
    if (
      (c < 97 && s.indexOf(String.fromCharCode(c + 32)) == -1) ||
      (c >= 97 && s.indexOf(String.fromCharCode(c - 32)) == -1)
    ) {
      const s1 = longestNiceSubstring(s.substring(0, i)),
        s2 = longestNiceSubstring(s.substring(i + 1))
      if (s1.length >= s2.length) {
        return s1
      }
      return s2
    }
  }
  return s
}
