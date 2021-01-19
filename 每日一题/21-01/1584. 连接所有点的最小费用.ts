type Connect = {
  point1: number
  point2: number
  dis: number
}
export function minCostConnectPoints(points: number[][]): number {
  const n = points.length
  const unionFind = new UnionFind(n)
  const distance: Connect[] = []
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const val =
        Math.abs(points[i][0] - points[j][0]) +
        Math.abs(points[i][1] - points[j][1])
      distance.push({ point1: i, point2: j, dis: val })
    }
  }

  distance.sort((x: Connect, y: Connect) => {
    return x.dis - y.dis
  })

  let count = n - 1
  let res = 0
  for (let { point1: x, point2: y, dis } of distance) {
    const faX = unionFind.find(x)
    const faY = unionFind.find(y)
    if (faX === faY) {
      continue
    }

    unionFind.union(x, y)
    res += dis
    count -= 1

    if (count <= 0) {
      break
    }
  }

  return res
}

class UnionFind {
  fa: number[]
  constructor(n: number) {
    this.fa = new Array(n)
    for (let i = 0; i < n; i++) {
      this.fa[i] = i
    }
  }
  find(x: number): number {
    return x === this.fa[x] ? x : (this.fa[x] = this.find(this.fa[x]))
  }
  union(x: number, y: number): void {
    let faX = this.find(x),
      faY = this.find(y)
    if (faX !== faY) {
      this.fa[faX] = faY
    }
  }
}
