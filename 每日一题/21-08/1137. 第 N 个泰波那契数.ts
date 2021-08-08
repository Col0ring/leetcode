// 迭代 dp
export function tribonacci(n: number): number {
  if (n === 0) {
    return 0
  }
  if (n === 1 || n === 2) {
    return 1
  }
  let p = 0,
    q = 0,
    r = 1,
    s = 1
  for (let i = 3; i <= n; ++i) {
    p = q
    q = r
    r = s
    s = p + q + r
  }
  return s
}
