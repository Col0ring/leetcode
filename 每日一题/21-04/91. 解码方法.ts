// dp
export function numDecodings(s: string): number {
  const n = s.length
  const f: number[] = new Array(n + 1).fill(0)
  f[0] = 1
  for (let i = 1; i <= n; ++i) {
    // 如果只有一个符号
    if (s[i - 1] !== '0') {
      f[i] += f[i - 1]
    }
    // 如果有两个个符号，小于 26
    if (i > 1 && s[i - 2] !== '0' && +s[i - 2] * 10 + +s[i - 1] <= 26) {
      f[i] += f[i - 2]
    }
  }
  return f[n]
}
