export function checkInclusion(s1: string, s2: string): boolean {
  const n = s1.length,
    m = s2.length
  if (n > m) {
    return false
  }
  const cnt1 = new Array(26).fill(0)
  const cnt2 = new Array(26).fill(0)
  for (let i = 0; i < n; ++i) {
    ++cnt1[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]
    ++cnt2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]
  }
  if (cnt1.toString() === cnt2.toString()) {
    return true
  }
  for (let i = n; i < m; ++i) {
    ++cnt2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]
    --cnt2[s2[i - n].charCodeAt(0) - 'a'.charCodeAt(0)]
    if (cnt1.toString() === cnt2.toString()) {
      return true
    }
  }
  return false
}
