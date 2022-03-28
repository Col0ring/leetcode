export function hasAlternatingBits(n: number): boolean {
  let prev = 2
  while (n !== 0) {
    const cur = n % 2
    if (cur === prev) {
      return false
    }
    prev = cur
    n = Math.floor(n / 2)
  }
  return true
}
