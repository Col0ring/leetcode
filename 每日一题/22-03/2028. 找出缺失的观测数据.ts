export function missingRolls(
  rolls: number[],
  mean: number,
  n: number
): number[] {
  const m = rolls.length
  const sum = mean * (n + m)
  let missingSum = sum
  for (const roll of rolls) {
    missingSum -= roll
  }
  if (missingSum < n || missingSum > 6 * n) {
    return []
  }
  const quotient = Math.floor(missingSum / n),
    remainder = missingSum % n
  const missing: number[] = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    missing[i] = quotient + (i < remainder ? 1 : 0)
  }
  return missing
}
