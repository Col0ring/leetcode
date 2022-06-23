export function findSubstring(s: string, words: string[]): number[] {
  const res: number[] = []
  const m = words.length,
    n = words[0].length,
    ls = s.length
  for (let i = 0; i < n; i++) {
    if (i + m * n > ls) {
      break
    }
    const differ = new Map<string, number>()
    for (let j = 0; j < m; j++) {
      const word = s.substring(i + j * n, i + (j + 1) * n)
      differ.set(word, (differ.get(word) || 0) + 1)
    }
    for (const word of words) {
      differ.set(word, (differ.get(word) || 0) - 1)
      if (differ.get(word) === 0) {
        differ.delete(word)
      }
    }
    for (let start = i; start < ls - m * n + 1; start += n) {
      if (start !== i) {
        let word = s.substring(start + (m - 1) * n, start + m * n)
        differ.set(word, (differ.get(word) || 0) + 1)
        if (differ.get(word) === 0) {
          differ.delete(word)
        }
        word = s.substring(start - n, start)
        differ.set(word, (differ.get(word) || 0) - 1)
        if (differ.get(word) === 0) {
          differ.delete(word)
        }
      }
      if (differ.size === 0) {
        res.push(start)
      }
    }
  }
  return res
}
