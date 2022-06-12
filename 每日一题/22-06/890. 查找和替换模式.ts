export function findAndReplacePattern(
  words: string[],
  pattern: string
): string[] {
  const ans: string[] = []
  for (const word of words) {
    if (match(word, pattern) && match(pattern, word)) {
      ans.push(word)
    }
  }
  return ans
}

const match = (word: string, pattern: string) => {
  const map = new Map<string, string>()
  for (let i = 0; i < word.length; ++i) {
    const x = word[i],
      y = pattern[i]
    if (!map.has(x)) {
      map.set(x, y)
    } else if (map.get(x) !== y) {
      // word 中的同一字母必须映射到 pattern 中的同一字母上
      return false
    }
  }
  return true
}
