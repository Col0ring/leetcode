// export function generate(numRows: number): number[][] {
//   const ans: number[][] = []
//   let n = 0
//   let row = [1]
//   while (n < numRows) {
//     const lastRow = row
//     row = []
//     ans.push(lastRow)
//     row.push(1)
//     for (let i = 1; i <= n; i++) {
//       row.push(lastRow[i - 1] + lastRow[i])
//     }
//     row.push(1)
//     n++
//   }
//   return ans
// }

// 递归
export function generate(numRows: number): number[][] {
  if (numRows === 0) {
    return []
  }
  if (numRows === 1) {
    return [[1]]
  }
  let lastLevel = generate(numRows - 1)

  let lastLevelLast = [...lastLevel[lastLevel.length - 1]]
  // lastLevelLast 就是上一层的数组，这里方便运算
  lastLevelLast.unshift(0)
  lastLevelLast.push(0)
  let nextLevel = []
  for (let i = 0; i < lastLevelLast.length - 1; i++) {
    nextLevel.push(Number(lastLevelLast[i]) + Number(lastLevelLast[i + 1]))
  }
  lastLevel.push(nextLevel)
  return lastLevel
}
