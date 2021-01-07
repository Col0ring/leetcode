export function findCircleNum(isConnected: number[][]): number {
  const dfs = (
    isConnected: number[][],
    visited: Set<number>,
    provinces: number,
    i: number
  ) => {
    for (let j = 0; j < provinces; j++) {
      if (isConnected[i][j] == 1 && !visited.has(j)) {
        visited.add(j)
        dfs(isConnected, visited, provinces, j)
      }
    }
  }
  const provinces = isConnected.length
  const visited = new Set<number>()
  let circles = 0
  for (let i = 0; i < provinces; i++) {
    if (!visited.has(i)) {
      dfs(isConnected, visited, provinces, i)
      circles++
    }
  }
  return circles
}
