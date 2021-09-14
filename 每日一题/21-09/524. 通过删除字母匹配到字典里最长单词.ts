export function findLongestWord(s: string, dictionary: string[]): string {
  let ans = ''
  for (const str of dictionary) {
    let i = 0,
      j = 0
    while (i < str.length && j < s.length) {
      if (str[i] === s[j]) {
        ++i
      }
      ++j
    }
    if (i === str.length) {
      if (str.length > ans.length || (str.length === ans.length && str < ans)) {
        ans = str
      }
    }
  }
  return ans
}
