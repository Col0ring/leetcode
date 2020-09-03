// tmp 存储了每一行 queen 从零开始的纵坐标
export function solveNQueens(n: number): string[][] {
  const res: string[][] = []
  function backtrack(temp: number[], res: string[][]) {
    if (temp.length === n) return res.push(convert(n, temp))
    for (let col = 0; col < n; col++) {
      if (isValid(temp, col)) {
        temp.push(col)
        backtrack(temp, res)
        temp.pop()
      }
    }
  }
  backtrack([], res)
  return res
}

function convert(n: number, queens: number[]): string[] {
  return queens.map(
    (queen) => '.'.repeat(queen) + 'Q' + '.'.repeat(n - queen - 1)
  )
}

function isValid(temp: number[], currCol: number): boolean {
  const currRow = temp.length
  for (let row = 0; row < temp.length; row++) {
    const col = temp[row]
    if (
      currCol === col ||
      currCol + currRow === col + row ||
      currCol - currRow === col - row
    )
      return false
  }
  return true
}
