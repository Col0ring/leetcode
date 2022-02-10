export function simplifiedFractions(n: number): string[] {
  const ans = []
  for (let denominator = 2; denominator <= n; ++denominator) {
    for (let numerator = 1; numerator < denominator; ++numerator) {
      if (gcd(numerator, denominator) == 1) {
        ans.push(numerator + '/' + denominator)
      }
    }
  }
  return ans
}

const gcd = (a: number, b: number): number => {
  if (b === 0) {
    return a
  }
  return gcd(b, a % b)
}
