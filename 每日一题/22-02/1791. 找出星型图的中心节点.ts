export function findCenter(edges: number[][]): number {
  const n = edges.length + 1
  const degrees: number[] = new Array(n + 1).fill(0)
  for (const edge of edges) {
    degrees[edge[0]]++
    degrees[edge[1]]++
  }
  for (let i = 1; ; i++) {
    if (degrees[i] === n - 1) {
      return i
    }
  }
}
