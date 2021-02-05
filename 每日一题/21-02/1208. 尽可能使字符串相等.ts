export function equalSubstring(s: string, t: string, maxCost: number): number {
  const n = s.length
  const accDiff = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    accDiff[i + 1] =
      accDiff[i] + Math.abs(s[i].charCodeAt(0) - t[i].charCodeAt(0))
  }
  let maxLength = 0
  for (let i = 1; i <= n; i++) {
    const start = binarySearch(accDiff, i, accDiff[i] - maxCost)
    maxLength = Math.max(maxLength, i - start)
  }
  return maxLength
}

const binarySearch = (accDiff: number[], endIndex: number, target: number) => {
  let low = 0,
    high = endIndex
  while (low < high) {
    const mid = Math.floor((high - low) / 2) + low
    if (accDiff[mid] < target) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  return low
}
