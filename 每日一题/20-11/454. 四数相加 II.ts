export function fourSumCount(
  A: number[],
  B: number[],
  C: number[],
  D: number[]
): number {
  const countAB = new Map<number, number>()
  A.forEach((u) =>
    B.forEach((v) => countAB.set(u + v, (countAB.get(u + v) || 0) + 1))
  )
  let ans = 0
  for (let u of C) {
    for (let v of D) {
      if (countAB.has(-u - v)) {
        ans += countAB.get(-u - v)!
      }
    }
  }
  return ans
}
