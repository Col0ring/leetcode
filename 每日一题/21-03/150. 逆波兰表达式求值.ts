// 栈
export function evalRPN(tokens: string[]): number {
  const isNumber = (str: string) => {
    return !/^(\+|\-|\*|\/)$/.test(str)
  }
  const resMap: Record<string, (a: number, b: number) => number> = {
    '-': (a: number, b: number) => a - b,
    '+': (a: number, b: number) => a + b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) =>
      // 大坑
      a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b)
  }
  const stack: number[] = []
  for (let i = 0; i < tokens.length; i++) {
    if (isNumber(tokens[i])) {
      stack.push(+tokens[i])
    } else {
      const num1 = stack.pop()!
      const num2 = stack.pop()!
      stack.push(resMap[tokens[i]](num2, num1))
    }
  }
  return stack[0]
}

// export function evalRPN(tokens: string[]): number {
//   const stack: number[] = []
//   const SIGN = {
//     '*': (a: number, b: number) => a * b,
//     '/': (a: number, b: number) =>
//       a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b),
//     '+': (a: number, b: number) => a + b,
//     '-': (a: number, b: number) => a - b
//   }
//   const signs = Object.keys(SIGN)

//   for (let i = 0; i < tokens.length; i++) {
//     let token = tokens[i]
//     if (!signs.includes(token)) {
//       stack.push(+token)
//     } else {
//       const b = stack.pop()!
//       const a = stack.pop()!
//       stack.push(SIGN[token as '*' | '/' | '+' | '-'](+a, +b))
//     }
//   }
//   return +stack.pop()!
// }
