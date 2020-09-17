export function findRedundantDirectedConnection(edges: number[][]): number[] {
  //并查集
  const len = edges.length
  const sln = new UnionFind(len)
  let merged: number[] = []
  for (let i = 0; i <= len; i++) {
    merged[i] = i
  }
  let twoParent = -1
  let cycle = -1
  for (let i = 0; i < edges.length; i++) {
    let edge = edges[i]
    let begin = edge[0],
      end = edge[1]
    if (merged[end] != end) {
      twoParent = i
    } else {
      merged[end] = begin
      if (sln.find(begin) == sln.find(end)) {
        cycle = i
      } else {
        sln.merge(begin, end)
      }
    }
  }
  if (twoParent < 0) {
    //只有环
    return edges[cycle]
  } else {
    let TPnode = edges[twoParent]
    //有两个入度的点，此时判断有无环
    if (cycle >= 0) {
      return [merged[TPnode[1]], TPnode[1]]
    } else {
      return TPnode
    }
  }
}
//有环
//无环，但是有2入度点
class UnionFind {
  parent: number[]
  constructor(n: number) {
    this.parent = []
    for (let i = 0; i <= n; i++) {
      this.parent[i] = i
    }
  }

  find(index: number) {
    if (this.parent[index] != index) {
      this.parent[index] = this.find(this.parent[index])
    }
    return this.parent[index]
  }

  merge(x: number, y: number) {
    this.parent[this.find(x)] = this.find(y)
  }
}
