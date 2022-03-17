export function longestWord(words: string[]): string {
  words.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length
    } else {
      return b.localeCompare(a)
    }
  })
  let longest = ''
  let candidates = new Set<string>()
  candidates.add('')
  const n = words.length
  for (let i = 0; i < n; i++) {
    const word = words[i]
    if (candidates.has(word.slice(0, word.length - 1))) {
      candidates.add(word)
      longest = word
    }
  }
  return longest
}
