export function eraseOverlapIntervals(intervals: number[][]): number {
  if (!intervals.length) {
    return 0
  }

  intervals.sort((a, b) => a[0] - b[0])
  const n = intervals.length
  const f: number[] = new Array(n).fill(1)

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (intervals[j][1] <= intervals[i][0]) {
        f[i] = Math.max(f[i], f[j] + 1)
      }
    }
  }
  return n - Math.max(...f)
}
