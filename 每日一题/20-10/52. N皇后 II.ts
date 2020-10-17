const backtrack = (
  n: number,
  row: number,
  columns: Set<number>,
  diagonals1: Set<number>,
  diagonals2: Set<number>
) => {
  if (row === n) {
    return 1
  } else {
    let count = 0
    for (let i = 0; i < n; i++) {
      if (columns.has(i)) {
        continue
      }
      const diagonal1 = row - i
      if (diagonals1.has(diagonal1)) {
        continue
      }
      const diagonal2 = row + i
      if (diagonals2.has(diagonal2)) {
        continue
      }
      columns.add(i)
      diagonals1.add(diagonal1)
      diagonals2.add(diagonal2)
      count += backtrack(n, row + 1, columns, diagonals1, diagonals2)
      columns.delete(i)
      diagonals1.delete(diagonal1)
      diagonals2.delete(diagonal2)
    }
    return count
  }
}

export function totalNQueens(n: number): number {
  const columns = new Set<number>()
  const diagonals1 = new Set<number>()
  const diagonals2 = new Set<number>()
  return backtrack(n, 0, columns, diagonals1, diagonals2)
}
