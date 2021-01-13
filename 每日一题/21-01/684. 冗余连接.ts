// 并查集
export function findRedundantConnection(edges: number[][]): number[] {
  const union = (parent: number[], index1: number, index2: number) => {
    parent[find(parent, index1)] = find(parent, index2)
  }

  const find = (parent: number[], index: number) => {
    if (parent[index] !== index) {
      parent[index] = find(parent, parent[index])
    }
    return parent[index]
  }

  const nodesCount = edges.length
  const parent = new Array(nodesCount + 1).fill(0).map((value, index) => index)
  for (let i = 0; i < nodesCount; i++) {
    const edge = edges[i]
    const node1 = edge[0],
      node2 = edge[1]
    if (find(parent, node1) != find(parent, node2)) {
      union(parent, node1, node2)
    } else {
      return edge
    }
  }
  return [0]
}
