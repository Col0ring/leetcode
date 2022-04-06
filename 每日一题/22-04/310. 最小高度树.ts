// dfs
export function findMinHeightTrees(n: number, edges: number[][]): number[] {
  const ans: number[] = []
  if (n === 1) {
    ans.push(0)
    return ans
  }
  const adj: number[][] = new Array(n).fill(0).map(() => new Array())
  for (const edge of edges) {
    adj[edge[0]].push(edge[1])
    adj[edge[1]].push(edge[0])
  }

  const parent: number[] = new Array(n).fill(-1)
  /* 找到与节点 0 最远的节点 x */
  let x = findLongestNode(0, parent, adj)
  /* 找到与节点 x 最远的节点 y */
  let y = findLongestNode(x, parent, adj)
  /* 求出节点 x 到节点 y 的路径 */
  const path = []
  parent[x] = -1
  while (y !== -1) {
    path.push(y)
    y = parent[y]
  }
  const m = path.length
  if (m % 2 === 0) {
    ans.push(path[Math.floor(m / 2) - 1])
  }
  ans.push(path[Math.floor(m / 2)])
  return ans
}

const findLongestNode = (u: number, parent: number[], adj: number[][]) => {
  const n = adj.length
  const dist: number[] = new Array(n).fill(-1)
  dist[u] = 0

  const dfs = (
    u: number,
    dist: number[],
    parent: number[],
    adj: number[][]
  ) => {
    for (const v of adj[u]) {
      if (dist[v] < 0) {
        dist[v] = dist[u] + 1
        parent[v] = u
        dfs(v, dist, parent, adj)
      }
    }
  }

  dfs(u, dist, parent, adj)
  let maxdist = 0
  let node = -1
  for (let i = 0; i < n; i++) {
    if (dist[i] > maxdist) {
      maxdist = dist[i]
      node = i
    }
  }
  return node
}
