export function addToArrayForm(A: number[], K: number): number[] {
  const res: number[] = []
  const n = A.length
  for (let i = n - 1; i >= 0; --i) {
    let sum = A[i] + (K % 10)
    K = Math.floor(K / 10)
    if (sum >= 10) {
      K++
      sum -= 10
    }
    res.push(sum)
  }
  for (; K > 0; K = Math.floor(K / 10)) {
    res.push(K % 10)
  }
  res.reverse()
  return res
}
