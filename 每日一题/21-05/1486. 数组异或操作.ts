export function xorOperation(n: number, start: number): number {
  let ans = 0
  for (let i = 0; i < n; ++i) {
    ans ^= start + i * 2
  }
  return ans
}
