export function findKthNumber(n: number, k: number): number {
  let curr = 1
  k--
  while (k > 0) {
    const steps = getSteps(curr, n)
    if (steps <= k) {
      k -= steps
      curr++
    } else {
      curr = curr * 10
      k--
    }
  }
  return curr
}

const getSteps = (curr: number, n: number) => {
  let steps = 0
  let first = curr
  let last = curr
  while (first <= n) {
    steps += Math.min(last, n) - first + 1
    first = first * 10
    last = last * 10 + 9
  }
  return steps
}
