export function findDiagonalOrder(mat: number[][]): number[] {
  const m = mat.length
  const n = mat[0].length
  const res: number[] = new Array(m * n).fill(0)
  let pos = 0
  for (let i = 0; i < m + n - 1; i++) {
    if (i % 2 === 1) {
      let x = i < n ? 0 : i - n + 1
      let y = i < n ? i : n - 1
      while (x < m && y >= 0) {
        res[pos] = mat[x][y]
        pos++
        x++
        y--
      }
    } else {
      let x = i < m ? i : m - 1
      let y = i < m ? 0 : i - m + 1
      while (x >= 0 && y < n) {
        res[pos] = mat[x][y]
        pos++
        x--
        y++
      }
    }
  }
  return res
}
