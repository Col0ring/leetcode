export function reverseParentheses(s: string): string {
  const stk: string[] = []
  let str = ''
  for (const ch of s) {
    if (ch === '(') {
      stk.push(str)
      str = ''
    } else if (ch === ')') {
      str = str.split('').reverse().join('')
      str = stk[stk.length - 1] + str
      stk.pop()
    } else {
      str += ch
    }
  }
  return str
}
