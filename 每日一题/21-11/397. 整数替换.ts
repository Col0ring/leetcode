export function integerReplacement(n: number): number {
  if (n === 1) {
    return 0
  }
  if (n % 2 === 0) {
    return 1 + integerReplacement(Math.floor(n / 2))
  }
  return (
    2 +
    Math.min(
      integerReplacement(Math.floor(n / 2)),
      integerReplacement(Math.floor(n / 2) + 1)
    )
  )
}
