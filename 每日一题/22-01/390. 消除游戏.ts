// 对称思维
export function lastRemaining(n: number): number {
  return n > 1
    ? 2 * (Math.floor(n / 2) + 1 - lastRemaining(Math.floor(n / 2)))
    : 1
}
