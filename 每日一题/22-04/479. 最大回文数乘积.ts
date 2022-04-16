export function largestPalindrome(n: number): number {
  if (n === 1) {
    return 9
  }
  const upper = 10 ** n - 1
  for (let left = upper; left > upper / 10; left--) {
    let right = String(left).split('').reverse().join('')
    // bigint 简化？
    let p = BigInt(String(left) + right) //得到回文数
    let x = BigInt(upper)
    while (x * x >= p) {
      if (p % x === BigInt(0)) {
        // x 是 p 的因子
        return Number(p % BigInt(1337))
      }
      x--
    }
  }
  return 0
}
