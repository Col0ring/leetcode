export function smallestGoodBase(n: string): string {
  const nVal = parseInt(n)
  const mMax = Math.floor(Math.log(nVal) / Math.log(2))
  for (let m = mMax; m > 1; m--) {
    const k = BigInt(Math.floor(Math.pow(nVal, 1.0 / m)))
    if (k > 1) {
      let mul = BigInt(1),
        sum = BigInt(1)
      for (let i = 1; i <= m; i++) {
        mul *= k
        sum += mul
      }
      if (sum === BigInt(n)) {
        return k + ''
      }
    }
  }
  return BigInt(n) - BigInt(1) + ''
}
