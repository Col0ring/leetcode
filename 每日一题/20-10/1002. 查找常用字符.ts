// 计数
export function commonChars(A: string[]): string[] {
  const ans: string[] = []
  const map: Record<string, number> = {}
  for (const word of A) {
    const subMap: Record<string, number> = {}
    const len = word.length
    for (let i = 0; i < len; i++) {
      subMap[word[i]] ? (subMap[word[i]] = 1) : subMap[word[i]]++
    }
    // 全部重置
    for (let i = 0; i < 26; i++) {
      const char = String.fromCharCode(i + 97)
      map[char] = Math.min(subMap[char] ?? 0, map[char] ?? 0)
    }
  }
  const keys = Object.keys(map)
  for (const key of keys) {
    ans.push(...key.repeat(map[key]))
  }
  return ans
}
