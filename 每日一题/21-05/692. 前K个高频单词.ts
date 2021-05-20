export function topKFrequent(words: string[], k: number): string[] {
  const cnt = new Map<string, number>()
  for (const word of words) {
    cnt.set(word, (cnt.get(word) || 0) + 1)
  }
  const rec: string[] = []
  for (const entry of cnt.keys()) {
    rec.push(entry)
  }
  rec.sort((word1, word2) => {
    return cnt.get(word1) === cnt.get(word2)
      ? word1 > word2
        ? 1
        : -1
      : cnt.get(word2)! - cnt.get(word1)!
  })
  return rec.slice(0, k)
}
