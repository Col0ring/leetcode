// dfs （超时）
// export function uniquePaths(m: number, n: number): number {
//   let ans = 0

//   const dfs = (r: number, c: number) => {
//     if (r > m || c > n) {
//       return
//     }
//     if (r === m && c === n) {
//       ans++
//     }
//     dfs(r + 1, c)
//     dfs(r, c + 1)
//   }

//   dfs(1, 1)

//   return ans
// }

// dp
export function uniquePaths(m: number, n: number): number {
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    f[i][0] = 1
  }
  for (let j = 0; j < n; j++) {
    f[0][j] = 1
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      f[i][j] = f[i - 1][j] + f[i][j - 1]
    }
  }
  return f[m - 1][n - 1]
}
