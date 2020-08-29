// // 暴力法
// function shortestPalindrome(s: string): string {
//   const len = s.length
//   const rev_s = s.split('').reverse().join('')
//   for (let i = len; i > 0; i--) {
//     //aaba abaa
//     // 砍掉相同的回文部分
//     if (s.substring(0, i) === rev_s.substring(len - i)) {
//       return rev_s.substring(0, len - i) + s
//     }
//   }
//   return rev_s + s
// }

// KMP
function shortestPalindrome(s: string): string {
  const rev_s = s.split('').reverse().join('')
  const str = s + '#' + rev_s
  const next: number[] = new Array(str.length).fill(0)
  // 抽出来，方便学习记忆，是固定的模板代码
  const kmp = (next: number[], str: string) => {
    next[0] = 0
    let len = 0
    let i = 1
    while (i < str.length) {
      if (str[i] === str[len]) {
        len++
        next[i] = len
        i++
      } else {
        if (len === 0) {
          next[i] = 0
          i++
        } else {
          len = next[len - 1]
        }
      }
    }
  }
  kmp(next, str)
  const maxLen = next[str.length - 1] // 最长回文前缀的长度
  const add = s.substring(maxLen).split('').reverse().join('')
  return add + s
}
