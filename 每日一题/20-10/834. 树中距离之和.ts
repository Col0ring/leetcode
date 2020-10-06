export function sumOfDistancesInTree(N: number, edges: number[][]): number[] {
  const ans: number[] = new Array(N).fill(0)
  const sz = new Array(N).fill(0)
  const dp = new Array(N).fill(0)
  const graph = new Array(N).fill(0).map<number[]>((v) => [])
  for (const [u, v] of edges) {
    graph[u].push(v)
    graph[v].push(u)
  }
  const dfs = (u: number, f: number) => {
    sz[u] = 1
    dp[u] = 0
    for (const v of graph[u]) {
      if (v === f) {
        continue
      }
      dfs(v, u)
      dp[u] += dp[v] + sz[v]
      sz[u] += sz[v]
    }
  }
  const dfs2 = (u: number, f: number) => {
    ans[u] = dp[u]
    for (const v of graph[u]) {
      if (v === f) {
        continue
      }
      const pu = dp[u],
        pv = dp[v]
      const su = sz[u],
        sv = sz[v]

      dp[u] -= dp[v] + sz[v]
      sz[u] -= sz[v]
      dp[v] += dp[u] + sz[u]
      sz[v] += sz[u]

      dfs2(v, u)
      ;(dp[u] = pu), (dp[v] = pv)
      ;(sz[u] = su), (sz[v] = sv)
    }
  }

  dfs(0, -1)
  dfs2(0, -1)
  return ans
}
