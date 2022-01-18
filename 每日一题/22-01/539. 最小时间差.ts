// 处理分钟再排序
export function findMinDifference(timePoints: string[]): number {
  let time: number[] = []
  for (let t of timePoints) {
    let [n, m] = t.split(':')
    time.push(+n * 60 + +m)
  }
  time.sort((a, b) => a - b)
  let l = time.length - 1
  let ans = 1440 - (time[l] - time[0]) // 一天 24 * 60 = 1440（分钟）
  for (let i = 0; i < l; i++) {
    ans = Math.min(ans, time[i + 1] - time[i])
  }
  return ans
}
