export function getRow(rowIndex: number): number[] {
  let n = 0
  let row = [1]
  while (n < rowIndex) {
    const lastRow = row
    row = []
    row.push(1)
    for (let i = 1; i <= n; i++) {
      row.push(lastRow[i - 1] + lastRow[i])
    }
    row.push(1)
    n++
  }
  return row
}
