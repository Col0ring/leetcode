export function catMouseGame(graph: number[][]): number {
  const n = graph.length

  //  老鼠赢:1, 平局:0, 猫:2。
  const dp: number[][][] = new Array(n * 2)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(n).fill(-1)))

  dfs(0, 1, 2)
  return dp[0][1][2]

  // 老鼠 1   平局 0   猫 2
  function dfs(d: number, m: number, c: number) {
    if (d === n * 2) return 0 // 前面的状态都走过了，所以平局
    if (m === 0) return 1 // 老鼠进洞
    if (m === c) return 2 // 猫捕捉老鼠
    if (dp[d][m][c] != -1) return dp[d][m][c] // 记忆化

    // 老鼠
    if (d % 2 === 0) {
      let res = 2 // 猫赢 < 平局 < 老鼠赢
      for (const nxt of graph[m]) {
        let r = dfs(d + 1, nxt, c)
        if (r === 1) {
          return (dp[d][m][c] = 1)
        }
        if (r === 0) res = 0
      }
      return (dp[d][m][c] = res)
    }
    // 猫
    else {
      let res = 1
      for (const nxt of graph[c]) {
        // 猫赢 < 平局 < 老鼠赢
        if (nxt === 0) continue // 猫不能进洞
        let r = dfs(d + 1, m, nxt)
        if (r === 2) {
          return (dp[d][m][c] = 2)
        }
        if (r === 0) res = 0
      }
      return (dp[d][m][c] = res)
    }
  }
}
