// function reverseWords(s: string): string {
//   //   return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
//   return s.trim().split(/\s+/).reverse().join(' ')
// }

// 双端队列
export function reverseWords(s: string): string {
  s = s.trim()
  let ans: string[] = []
  let word = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      word += s[i]
    } else if (s[i + 1] !== ' ') {
      ans.unshift(word)
      word = ''
    }
  }
  ans.unshift(word)
  return ans.join(' ')
}
