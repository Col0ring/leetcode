// 模拟
export function oddCells(m: number, n: number, indices: number[][]): number {
  const rows: number[] = new Array(m).fill(0)
  const cols: number[] = new Array(n).fill(0)
  for (const index of indices) {
    rows[index[0]]++
    cols[index[1]]++
  }
  let res = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (((rows[i] + cols[j]) & 1) !== 0) {
        res++
      }
    }
  }
  return res
}
