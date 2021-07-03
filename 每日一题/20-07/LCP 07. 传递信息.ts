export function numWays(n: number, relation: number[][], k: number): number {
  let ways = 0
  const edges: number[][] = new Array(n).fill(0).map(() => new Array())

  for (const [src, dst] of relation) {
    edges[src].push(dst)
  }

  const dfs = (index: number, steps: number) => {
    if (steps === k) {
      if (index === n - 1) {
        ways++
      }
      return
    }
    const list = edges[index]
    for (const nextIndex of list) {
      dfs(nextIndex, steps + 1)
    }
  }

  dfs(0, 0)
  return ways
}
