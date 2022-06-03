export function consecutiveNumbersSum(n: number): number {
  let ans = 0
  const bound = 2 * n
  for (let k = 1; k * (k + 1) <= bound; k++) {
    if (isKConsecutive(n, k)) {
      ans++
    }
  }
  return ans
}

const isKConsecutive = (n: number, k: number) => {
  if (k % 2 === 1) {
    return n % k === 0
  } else {
    return n % k !== 0 && (2 * n) % k === 0
  }
}
