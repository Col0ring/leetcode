export function superPow(a: number, b: number[]): number {
  const myPow = (x: number, n: number): number => {
    if (x == 1 || n == 0) return 1
    x %= 1337
    if (n < 0) return 1 / myPow(x, -n)
    if (n & 1) return x * myPow(x, n - 1)
    return myPow(x * x, n / 2)
  }
  const dfs = (a: number, b: number[]) => {
    if (b.length == 0) return 1
    const last = b.pop()!
    const part1 = myPow(a, last)
    const part2 = myPow(dfs(a, b), 10)
    return (part1 * part2) % 1337
  }
  return dfs(a, b)
}
