export function allPathsSourceTarget(graph: number[][]): number[][] {
  const stack: number[] = [],
    ans: number[][] = []

  const dfs = (graph: number[][], x: number, n: number) => {
    if (x === n) {
      ans.push([...stack])
      return
    }
    for (const y of graph[x]) {
      stack.push(y)
      dfs(graph, y, n)
      stack.pop()
    }
  }

  stack.push(0)
  dfs(graph, 0, graph.length - 1)
  return ans
}
