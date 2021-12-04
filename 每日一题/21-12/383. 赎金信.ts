export function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) {
    return false
  }
  const cnt: number[] = new Array(26).fill(0)
  for (const c of magazine) {
    cnt[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }
  for (const c of ransomNote) {
    cnt[c.charCodeAt(0) - 'a'.charCodeAt(0)]--
    if (cnt[c.charCodeAt(0) - 'a'.charCodeAt(0)] < 0) {
      return false
    }
  }
  return true
}
