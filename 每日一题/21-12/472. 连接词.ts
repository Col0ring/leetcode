export function findAllConcatenatedWordsInADict(words: string[]): string[] {
  words.sort((a, b) => a.length - b.length)
  const wordSet = new Set<string>()
  const ans = []
  for (const word of words) {
    if (exists(word, wordSet)) ans.push(word)
    wordSet.add(word)
  }
  return ans
}

function exists(target: string, nums: Set<string>) {
  const dp: boolean[] = Array(target.length).fill(false)
  for (let i = 0; i < target.length; i++) {
    if (nums.has(target.slice(0, i + 1))) {
      dp[i] = true
      continue
    }
    for (let j = 0; j < i; j++) {
      if (dp[j] && nums.has(target.slice(j + 1, i + 1))) {
        dp[i] = true
        break
      }
    }
  }
  return dp[target.length - 1]
}
