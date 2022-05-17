export function isAlienSorted(words: string[], order: string): boolean {
  const index: number[] = new Array(26).fill(0)
  for (let i = 0; i < order.length; ++i) {
    index[order[i].charCodeAt(0) - 'a'.charCodeAt(0)] = i
  }
  for (let i = 1; i < words.length; i++) {
    let valid = false
    for (let j = 0; j < words[i - 1].length && j < words[i].length; j++) {
      let prev = index[words[i - 1][j].charCodeAt(0) - 'a'.charCodeAt(0)]
      let curr = index[words[i][j].charCodeAt(0) - 'a'.charCodeAt(0)]
      if (prev < curr) {
        valid = true
        break
      } else if (prev > curr) {
        return false
      }
    }
    if (!valid) {
      /* 比较两个字符串的长度 */
      if (words[i - 1].length > words[i].length) {
        return false
      }
    }
  }
  return true
}
