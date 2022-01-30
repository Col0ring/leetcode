export function uncommonFromSentences(s1: string, s2: string): string[] {
  let freq = new Map<string, number>()
  freq = insert(s1, freq)
  freq = insert(s2, freq)

  const ans: string[] = []
  for (const entry of freq.entries()) {
    if (entry[1] === 1) {
      ans.push(entry[0])
    }
  }
  return ans
}

const insert = (s: string, freq: Map<string, number>) => {
  const arr = s.split(' ')
  for (const word of arr) {
    freq.set(word, (freq.get(word) || 0) + 1)
  }
  return freq
}
