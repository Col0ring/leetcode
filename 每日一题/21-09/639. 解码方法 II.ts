// dp
export function numDecodings(s: string): number {
  const MOD = 10 ** 9 + 7
  const n = s.length
  // a = f[i-2], b = f[i-1], c = f[i]
  let a = 0,
    b = 1,
    c = 0
  for (let i = 1; i <= n; ++i) {
    c = (b * check1digit(s[i - 1])) % MOD
    if (i > 1) {
      c = (c + a * check2digits(s[i - 2], s[i - 1])) % MOD
    }
    a = b
    b = c
  }
  return c
}

const check1digit = (ch: string) => {
  if (ch === '0') {
    return 0
  }
  return ch === '*' ? 9 : 1
}

const check2digits = (c0: string, c1: string) => {
  if (c0 === '*' && c1 === '*') {
    return 15
  }
  if (c0 === '*') {
    return c1.charCodeAt(0) <= '6'.charCodeAt(0) ? 2 : 1
  }
  if (c1 === '*') {
    if (c0 === '1') {
      return 9
    }
    if (c0 === '2') {
      return 6
    }
    return 0
  }
  return c0 !== '0' &&
    (c0.charCodeAt(0) - '0'.charCodeAt(0)) * 10 +
      (c1.charCodeAt(0) - '0'.charCodeAt(0)) <=
      26
    ? 1
    : 0
}
