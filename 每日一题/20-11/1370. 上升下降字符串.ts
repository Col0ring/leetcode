export function sortString(s: string): string {
  const num = new Array(26).fill(0)
  for (let ch of s) {
    num[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  let ret = ''
  while (ret.length < s.length) {
    for (let i = 0; i < 26; i++) {
      if (num[i]) {
        ret += String.fromCharCode(i + 'a'.charCodeAt(0))
        num[i]--
      }
    }
    for (let i = 25; i >= 0; i--) {
      if (num[i]) {
        ret += String.fromCharCode(i + 'a'.charCodeAt(0))
        num[i]--
      }
    }
  }
  return ret
}
