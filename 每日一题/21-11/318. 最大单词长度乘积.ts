export function maxProduct(words: string[]): number {
  const length = words.length
  const masks: number[] = new Array(length).fill(0)
  for (let i = 0; i < length; i++) {
    const word = words[i]
    const wordLength = word.length
    for (let j = 0; j < wordLength; j++) {
      masks[i] |= 1 << (word[j].charCodeAt(0) - 'a'.charCodeAt(0))
    }
  }
  let maxProd = 0
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if ((masks[i] & masks[j]) === 0) {
        maxProd = Math.max(maxProd, words[i].length * words[j].length)
      }
    }
  }
  return maxProd
}
