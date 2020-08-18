// 队列 bfs
function updateMatrix(matrix: number[][]): number[][] {
  const rowLen = matrix.length
  if (!rowLen) {
    return []
  }
  const colLen = matrix[0].length
  const ans: number[][] = new Array(rowLen)
  for (let i = 0; i < rowLen; i++) {
    ans[i] = new Array(colLen).fill(-1)
  }
  const queue: number[][] = []
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (matrix[i][j] === 0) {
        ans[i][j] = 0
        queue.push([i, j])
      }
    }
  }
  let dist = 0
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]
  // bfs
  while (queue.length) {
    const len = queue.length
    dist++
    for (let i = 0; i < len; i++) {
      const [row, col] = queue.shift()!
      for (const dir of dirs) {
        if (
          row + dir[0] < rowLen &&
          row + dir[0] >= 0 &&
          col + dir[1] >= 0 &&
          col + dir[1] < colLen
        ) {
          let n = ans[row + dir[0]][col + dir[1]]
          if (n === -1) {
            queue.push([row + dir[0], col + dir[1]])
            ans[row + dir[0]][col + dir[1]] = dist
          }
        }
      }
    }
  }
  return ans
}
