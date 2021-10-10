export function arrangeCoins(n: number): number {
  let ans = 0
  let cur = n
  while (cur >= 0) {
    ans += 1
    cur -= ans
  }

  return ans - 1
}
