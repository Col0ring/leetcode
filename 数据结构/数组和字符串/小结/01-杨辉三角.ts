export function generate(numRows: number): number[][] {
  const ans: number[][] = []
  let n = 0
  let row = [1]
  while (n < numRows) {
    const lastRow = row
    row = []
    ans.push(lastRow)
    row.push(1)
    for (let i = 1; i <= n; i++) {
      row.push(lastRow[i - 1] + lastRow[i])
    }
    row.push(1)
    n++
  }
  return ans
}
