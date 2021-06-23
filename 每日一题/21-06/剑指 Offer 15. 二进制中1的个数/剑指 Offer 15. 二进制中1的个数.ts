export function hammingWeight(n: number) {
  let ret = 0
  for (let i = 0; i < 32; i++) {
    if ((n & (1 << i)) !== 0) {
      ret++
    }
  }
  return ret
}
