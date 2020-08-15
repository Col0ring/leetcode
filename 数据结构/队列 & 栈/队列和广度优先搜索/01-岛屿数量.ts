// dfs
// export function numIslands(grid: string[][]): number {
//   const rowLen = grid.length
//   if (!rowLen) {
//     return 0
//   }
//   const colLen = grid[0].length

//   let ans = 0
//   const dfs = (row: number, col: number) => {
//     if (
//       row < 0 ||
//       col < 0 ||
//       row >= rowLen ||
//       col >= colLen ||
//       grid[row][col] === '0'
//     ) {
//       return
//     }
//     grid[row][col] = '0'
//     dfs(row + 1, col)
//     dfs(row - 1, col)
//     dfs(row, col + 1)
//     dfs(row, col - 1)
//   }
//   for (let r = 0; r < rowLen; ++r) {
//     for (let c = 0; c < colLen; ++c) {
//       if (grid[r][c] == '1') {
//         ++ans
//         dfs(r, c)
//       }
//     }
//   }

//   return ans
// }

// bfs
export function numIslands(grid: string[][]): number {
  const rowLen = grid.length
  if (!rowLen) {
    return 0
  }
  const colLen = grid[0].length

  let ans = 0
  const queue: [number, number][] = []
  const bfs = () => {
    const dirs = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0]
    ]
    while (queue.length) {
      const cur = queue.shift()!
      for (const dir of dirs) {
        const x = cur[0] + dir[0]
        const y = cur[1] + dir[1]
        if (
          x < 0 ||
          x >= rowLen ||
          y < 0 ||
          y >= colLen ||
          grid[x][y] === '0'
        ) {
          continue
        }
        grid[x][y] = '0'
        queue.push([x, y])
      }
    }
  }

  for (let r = 0; r < rowLen; ++r) {
    for (let c = 0; c < colLen; ++c) {
      if (grid[r][c] == '1') {
        ++ans
        grid[r][c] = '0'
        queue.push([r, c])
        bfs()
      }
    }
  }

  return ans
}
