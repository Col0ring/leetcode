export function addOperators(num: string, target: number): string[] {
  const n = num.length
  const ans: string[] = []
  let expr: string[] = []

  const backtrack = (expr: string[], i: number, res: number, mul: number) => {
    if (i === n) {
      if (res === target) {
        ans.push(expr.join(''))
      }
      return
    }
    const signIndex = expr.length
    if (i > 0) {
      expr.push('') // 占位，下面填充符号
    }
    let val = 0
    // 枚举截取的数字长度（取多少位），注意数字可以是单个 0 但不能有前导零
    for (let j = i; j < n && (j === i || num[i] !== '0'); ++j) {
      val = val * 10 + num[j].charCodeAt(0) - '0'.charCodeAt(0)
      expr.push(num[j])
      if (i === 0) {
        // 表达式开头不能添加符号
        backtrack(expr, j + 1, val, val)
      } else {
        // 枚举符号
        expr[signIndex] = '+'
        backtrack(expr, j + 1, res + val, val)
        expr[signIndex] = '-'
        backtrack(expr, j + 1, res - val, -val)
        expr[signIndex] = '*'
        backtrack(expr, j + 1, res - mul + mul * val, mul * val)
      }
    }
    expr = expr.splice(signIndex, expr.length - signIndex)
  }

  backtrack(expr, 0, 0, 0)
  return ans
}
