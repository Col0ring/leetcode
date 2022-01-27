export function countValidWords(sentence: string): number {
  const n = sentence.length
  let l = 0,
    r = 0
  let ret = 0
  while (true) {
    while (l < n && sentence[l] === ' ') {
      l++
    }
    if (l >= n) {
      break
    }
    r = l + 1
    while (r < n && sentence[r] != ' ') {
      r++
    }
    if (isValid(sentence.slice(l, r))) {
      // 判断根据空格分解出来的 token 是否有效
      ret++
    }
    l = r + 1
  }
  return ret
}

const isValid = (word: string) => {
  const n = word.length
  let hasHyphens = false
  for (let i = 0; i < n; i++) {
    if (word[i] >= '0' && word[i] <= '9') {
      return false
    } else if (word[i] === '-') {
      if (
        hasHyphens === true ||
        i === 0 ||
        i === n - 1 ||
        !isLetter(word[i - 1]) ||
        !isLetter(word[i + 1])
      ) {
        return false
      }
      hasHyphens = true
    } else if (word[i] === '!' || word[i] === '.' || word[i] === ',') {
      if (i !== n - 1) {
        return false
      }
    }
  }
  return true
}

const isLetter = (ch: string) => {
  if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
    return true
  }
  return false
}
