export function minDays(bloomDay: number[], m: number, k: number): number {
  if (m > bloomDay.length / k) {
    return -1
  }
  let low = Math.min(...bloomDay),
    high = Math.max(...bloomDay)
  while (low < high) {
    const days = Math.floor((high - low) / 2) + low
    if (canMake(bloomDay, days, m, k)) {
      high = days
    } else {
      low = days + 1
    }
  }
  return low
}

const canMake = (bloomDay: number[], days: number, m: number, k: number) => {
  let bouquets = 0
  let flowers = 0
  const length = bloomDay.length
  for (let i = 0; i < length && bouquets < m; i++) {
    if (bloomDay[i] <= days) {
      flowers++
      if (flowers == k) {
        bouquets++
        flowers = 0
      }
    } else {
      flowers = 0
    }
  }
  return bouquets >= m
}
