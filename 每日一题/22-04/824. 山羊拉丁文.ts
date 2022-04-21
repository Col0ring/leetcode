export function toGoatLatin(sentence: string): string {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

  const n = sentence.length
  let i = 0,
    cnt = 1,
    ans = ''

  while (i < n) {
    let j = i
    while (j < n && sentence[j] !== ' ') {
      ++j
    }

    ++cnt
    if (cnt !== 2) {
      ans += ' '
    }
    if (vowels.has(sentence[i])) {
      ans += sentence.substring(i, j)
    } else {
      ans += sentence.slice(i + 1, j)
      ans += sentence[i]
    }
    ans += 'm'
    for (let k = 0; k < cnt; ++k) {
      ans += 'a'
    }

    i = j + 1
  }

  return ans
}
