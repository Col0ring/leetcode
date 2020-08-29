// export function getRow(rowIndex: number): number[] {
//   let n = 0
//   let row = [1]
//   while (n < rowIndex) {
//     const lastRow = row
//     row = []
//     row.push(1)
//     for (let i = 1; i <= n; i++) {
//       row.push(lastRow[i - 1] + lastRow[i])
//     }
//     row.push(1)
//     n++
//   }
//   return row
// }

// 递归
export function getRow(rowIndex: number): number[] {
  if (rowIndex === 0) {
    return [1]
  }

  let lastRow = [...getRow(rowIndex - 1)]

  lastRow.unshift(0)
  lastRow.push(0)
  let currRow = []
  for (let i = 0; i < lastRow.length - 1; i++) {
    currRow.push(Number(lastRow[i]) + Number(lastRow[i + 1]))
  }
  return currRow
}
