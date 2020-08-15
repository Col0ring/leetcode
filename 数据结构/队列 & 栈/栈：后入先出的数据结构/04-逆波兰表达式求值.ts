export function evalRPN(tokens: string[]): number {
  const stack: number[] = []
  const SIGN = {
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) =>
      a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b),
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b
  }
  const signs = Object.keys(SIGN)

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i]
    if (!signs.includes(token)) {
      stack.push(+token)
    } else {
      const b = stack.pop()!
      const a = stack.pop()!
      stack.push(SIGN[token as '*' | '/' | '+' | '-'](+a, +b))
    }
  }
  return +stack.pop()!
}
