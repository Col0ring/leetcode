export function divide(dividend: number, divisor: number): number {
  //溢出的情况只有这一种
  if (dividend === -2147483648 && divisor === -1) return 2147483647
  const absDivdend = Math.abs(dividend),
    absDivisor = Math.abs(divisor)
  //被除数比除数小直接返回0即可(注意取绝对值)
  if (absDivdend < absDivisor) return 0
  //字符串解题法，用绝对值计算，不考虑符号。
  //被除数字符串
  let dividendStr = absDivdend + ''
  //答案字符串
  let resStr = ''
  //每次计算后剩下的值
  let left = 0
  for (let i = 0; i < dividendStr.length; i++) {
    //将上次计算剩下的值与被除数新的一位拼接，像05这种值会被解析成5，所以left初始可以是0
    left = parseInt(left + dividendStr[i])
    //如果剩下的值小于被除数，那么结果填0，跳到下一位再尝试
    if (left < divisor) {
      resStr += '0'
      continue
    }
    //此处模拟除法，没什么好说的
    else {
      let j = 0
      while (left >= absDivisor) {
        left -= absDivisor
        j++
      }
      resStr += j
    }
  }
  //判断符号
  if ((divisor > 0 && dividend < 0) || (divisor < 0 && dividend > 0)) {
    return -parseInt(resStr)
  } else {
    return parseInt(resStr)
  }
}
