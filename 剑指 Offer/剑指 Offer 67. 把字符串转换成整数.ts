export function strToInt(str: string): number {
  let ans = 0
  let sign = 1
  const min = -(2 ** 31)
  const max = 2 ** 31 - 1
  let i = 0
  // 过滤开头空格
  while (i < str.length && str[i] === ' ') {
    i++
  }
  // 过滤 - 和 +
  if (
    (str[i] === '-' || str[i] === '+') &&
    '0' <= str[i + 1] &&
    str[i + 1] <= '9'
  ) {
    sign = str[i] === '+' ? 1 : -1
    i++
  }
  // 拿到数字
  for (; i < str.length; i++) {
    // 遇到字符不在[0-9] 则推出循环
    if ('0' > str[i] || str[i] > '9') {
      break
    }

    // ans 巧用 - '0' 隐式转换 [0-9]字符
    ans = 10 * ans + (str.charCodeAt(i) - '0'.charCodeAt(0))
  }

  ans = sign * ans

  return ans <= min ? min : ans >= max ? max : ans
}
