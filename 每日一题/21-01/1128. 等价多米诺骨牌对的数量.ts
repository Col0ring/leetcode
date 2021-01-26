export function numEquivDominoPairs(dominoes: number[][]): number {
  const num = new Array(100).fill(0)
  let ret = 0
  for (const domino of dominoes) {
    const val =
      domino[0] < domino[1]
        ? domino[0] * 10 + domino[1]
        : domino[1] * 10 + domino[0]
    ret += num[val]
    num[val]++
  }
  return ret
}
