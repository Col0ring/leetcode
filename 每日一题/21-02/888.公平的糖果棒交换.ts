export function fairCandySwap(A: number[], B: number[]): number[] {
  const sumA = A.reduce((pre, next) => pre + next, 0),
    sumB = B.reduce((pre, next) => pre + next, 0)
  const delta = Math.floor((sumA - sumB) / 2)
  const rec = new Set(A)
  let ans: number[] = []
  for (const y of B) {
    const x = y + delta
    if (rec.has(x)) {
      ans = [x, y]
      break
    }
  }
  return ans
}
