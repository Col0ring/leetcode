export function findPoisonedDuration(
  timeSeries: number[],
  duration: number
): number {
  const len = timeSeries.length
  if (len === 0) {
    return 0
  }
  if (len === 1) {
    return duration
  }

  let s = 0
  for (let i = 0; i < len - 1; i++) {
    if (timeSeries[i + 1] - timeSeries[i] < duration) {
      s += timeSeries[i + 1] - timeSeries[i]
    } else {
      s += duration
    }
  }
  s += duration
  return s
}
