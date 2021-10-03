// 模拟
export function fractionToDecimal(
  numerator: number,
  denominator: number
): string {
  let map = new Map<number, number>()
  let ans = ''
  let mod = numerator / denominator
  // 结果为负，添加负号
  if (mod < 0) {
    ans = '-'
  }
  const n = Math.abs(numerator)
  const d = Math.abs(denominator)
  ans = ans + `${Math.floor(n / d)}`
  if (Math.floor(mod) === mod) return ans
  ans += '.'

  const start = ans.length
  let cur = (n % d) * 10
  let k = 0
  while (cur) {
    if (map.has(cur)) {
      const step = map.get(cur)!
      ans = ans.slice(0, start + step) + '(' + ans.slice(start + step) + ')'
      break
    } else {
      map.set(cur, k)
    }
    ans = ans + Math.floor(cur / d)
    cur = (cur % d) * 10
    k++
  }

  return ans
}
