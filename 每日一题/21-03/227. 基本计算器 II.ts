// 还是栈
export function calculate(s: string): number {
  s = s.trim()
  const stack: number[] = []
  let preSign = '+'
  let num = 0
  const n = s.length
  for (let i = 0; i < n; ++i) {
    if (!Number.isNaN(+s[i]) && s[i] !== ' ') {
      num = num * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0)
    }
    if (Number.isNaN(+s[i]) || i === n - 1) {
      switch (preSign) {
        case '+':
          stack.push(num)
          break
        case '-':
          stack.push(-num)
          break
        case '*':
          stack.push(stack.pop()! * num)
          break
        default:
          stack.push((stack.pop()! / num) | 0)
      }
      preSign = s[i]
      num = 0
    }
  }
  let ans = 0
  while (stack.length) {
    ans += stack.pop()!
  }
  return ans
}
