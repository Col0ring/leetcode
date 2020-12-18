export function findTheDifference(s: string, t: string): string {
  const cnt = new Array(26).fill(0)
  for (const ch of s) {
    cnt[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }
  for (const ch of t) {
    cnt[ch.charCodeAt(0) - 'a'.charCodeAt(0)]--
    if (cnt[ch.charCodeAt(0) - 'a'.charCodeAt(0)] < 0) {
      return ch
    }
  }
  return ' '
}
