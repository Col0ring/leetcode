// export function replaceSpace(s: string): string {
//   return s.replace(/ /g, '%20')
// }

export function replaceSpace(s: string): string {
  let ans = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      ans += '%20'
    } else {
      ans += s[i]
    }
  }
  return ans
}
