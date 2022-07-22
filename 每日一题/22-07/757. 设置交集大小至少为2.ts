export function intersectionSizeTwo(intervals: number[][]): number {
  const n = intervals.length
  let res = 0
  let m = 2
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    }
    return a[0] - b[0]
  })
  const temp: number[][] = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    temp[i] = []
  }

  const help = (
    intervals: number[][],
    temp: number[][],
    pos: number,
    num: number
  ) => {
    for (let i = pos; i >= 0; i--) {
      if (intervals[i][1] < num) {
        break
      }
      temp[i].push(num)
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = intervals[i][0], k = temp[i].length; k < m; j++, k++) {
      res++
      help(intervals, temp, i - 1, j)
    }
  }
  return res
}
