export class NumMatrix {
  sums: number[][] = []
  constructor(matrix: number[][]) {
    const m = matrix.length
    if (m > 0) {
      const n = matrix[0].length
      this.sums = new Array(m).fill(0).map(() => new Array(n + 1).fill(0))
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          this.sums[i][j + 1] = this.sums[i][j] + matrix[i][j]
        }
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    let sum = 0
    for (let i = row1; i <= row2; i++) {
      sum += this.sums[i][col2 + 1] - this.sums[i][col1]
    }
    return sum
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
