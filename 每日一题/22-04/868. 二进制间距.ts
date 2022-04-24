export function binaryGap(n: number): number {
  let last = -1,
    ans = 0
  for (let i = 0; n != 0; ++i) {
    if ((n & 1) === 1) {
      if (last !== -1) {
        ans = Math.max(ans, i - last)
      }
      last = i
    }
    n >>= 1
  }
  return ans
}
