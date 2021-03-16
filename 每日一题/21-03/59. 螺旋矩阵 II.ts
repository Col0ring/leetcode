// 还是 dfs
export function generateMatrix(n: number): number[][] {
  const maxNum = n * n
  let curNum = 1
  const matrix: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0))
  let row = 0,
    column = 0
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ] // 右下左上
  let directionIndex = 0
  while (curNum <= maxNum) {
    matrix[row][column] = curNum
    curNum++
    const nextRow = row + directions[directionIndex][0],
      nextColumn = column + directions[directionIndex][1]
    // 判断条件
    if (
      nextRow < 0 ||
      nextRow >= n ||
      nextColumn < 0 ||
      nextColumn >= n ||
      // 已经访问过，不为 0 就是
      matrix[nextRow][nextColumn] !== 0
    ) {
      directionIndex = (directionIndex + 1) % 4 // 顺时针旋转至下一个方向
    }
    row = row + directions[directionIndex][0]
    column = column + directions[directionIndex][1]
  }
  return matrix
}
