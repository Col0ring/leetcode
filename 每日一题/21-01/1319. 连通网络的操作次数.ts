export function makeConnected(n: number, connections: number[][]): number {
  if (connections.length < n - 1) {
    return -1
  }

  const dfs = (u: number, used: number[], edges: Map<number, number[]>) => {
    used[u] = 1
    if (edges.get(u)) {
      for (const v of edges.get(u)!) {
        if (!used[v]) {
          dfs(v, used, edges)
        }
      }
    }
  }

  const edges = new Map()
  for (const [x, y] of connections) {
    edges.get(x) ? edges.get(x).push(y) : edges.set(x, [y])
    edges.get(y) ? edges.get(y).push(x) : edges.set(y, [x])
  }

  const used = new Array(n).fill(0)

  let ans = 0
  for (let i = 0; i < n; i++) {
    if (!used[i]) {
      dfs(i, used, edges)
      ans++
    }
  }
  return ans - 1
}
