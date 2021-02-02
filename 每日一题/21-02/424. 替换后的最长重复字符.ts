export function characterReplacement(s: string, k: number): number {
  const num = new Array(26).fill(0)
  const n = s.length
  let maxn = 0,
    left = 0,
    right = 0

  while (right < n) {
    num[s[right].charCodeAt(0) - 'A'.charCodeAt(0)]++
    maxn = Math.max(maxn, num[s[right].charCodeAt(0) - 'A'.charCodeAt(0)])
    if (right - left + 1 - maxn > k) {
      num[s[left].charCodeAt(0) - 'A'.charCodeAt(0)]--
      left++
    }
    right++
  }
  return right - left
}
