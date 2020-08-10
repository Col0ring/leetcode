// function merge(intervals: number[][]): number[][] {
//   const len = intervals.length
//   if (!len) {
//     return intervals
//   }
//   // 先排序，然后在进行合并
//   const ans: number[][] = intervals
//   ans.sort((current, next) => current[0] - next[0])
//   for (let i = 0; i < ans.length - 1; i++) {
//     const current = intervals[i]
//     const next = intervals[i + 1]
//     if (current[1] >= next[0]) {
//       const left = current[0]
//       const right = Math.max(current[1], next[1])
//       ans.splice(i, 2, [left, right])
//       i--
//     }
//   }
//   return ans
// }

// 通过推入的方法
function merge(intervals: number[][]): number[][] {
  const len = intervals.length
  if (!len) {
    return intervals
  }
  intervals.sort((current, next) => current[0] - next[0])
  // 先排序，然后在进行合并
  const ans: number[][] = []
  let i = 0
  while (i < len) {
    const left = intervals[i][0]
    let right = intervals[i][1]
    // 如果有重叠，循环判断哪个起点满足条件
    while (i < len - 1 && intervals[i + 1][0] <= right) {
      i++
      right = Math.max(right, intervals[i][1])
    }
    // 将现在的区间放进res里面
    ans.push([left, right])
    // 接着判断下一个区间
    i++
  }
  return ans
}
