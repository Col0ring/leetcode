// dfs
export function removeStones(stones: number[][]): number {
  const n = stones.length
  const edge: Record<string, number[]> = {}

  const dfs = (x: number, vis: Set<number>, edge: Record<string, number[]>) => {
    vis.add(x)
    for (let y of edge[x]) {
      if (!vis.has(y)) {
        dfs(y, vis, edge)
      }
    }
  }

  for (const [i, [x1, y1]] of stones.entries()) {
    for (const [j, [x2, y2]] of stones.entries()) {
      if (x1 === x2 || y1 === y2) {
        edge[i] ? edge[i].push(j) : (edge[i] = [j])
      }
    }
  }

  const vis = new Set<number>()
  let num = 0
  for (let i = 0; i < n; i++) {
    if (!vis.has(i)) {
      num++
      dfs(i, vis, edge)
    }
  }
  return n - num
}
