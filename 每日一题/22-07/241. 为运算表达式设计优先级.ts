export function diffWaysToCompute(expression: string): number[] {
  if (!expression || expression.length === 0) {
    return []
  }

  const chars = expression.split('')
  const ans: number[] = []

  for (let i = 0; i < chars.length; i++) {
    const curChar = chars[i]

    // 判断是否为操作符
    if (Number.isNaN(+curChar)) {
      const leftList = diffWaysToCompute(expression.substring(0, i))
      const rightList = diffWaysToCompute(
        expression.substring(i + 1, expression.length)
      )

      leftList.forEach((left) => {
        rightList.forEach((right) => {
          if (curChar === '+') {
            ans.push(left + right)
          } else if (curChar === '-') {
            ans.push(left - right)
          } else {
            ans.push(left * right)
          }
        })
      })
    }
  }

  // ans 为空，证明是纯数字
  if (ans.length === 0) {
    ans.push(+expression)
  }

  return ans
}
