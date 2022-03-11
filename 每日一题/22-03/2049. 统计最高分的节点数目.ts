export function countHighestScoreNodes(parents: number[]): number {
  const n = parents.length
  const children: number[][] = new Array(n).map(() => [])
  let maxScore = 0
  let cnt = 0
  for (let i = 0; i < n; i++) {
    children[i] = []
  }
  for (let i = 0; i < n; i++) {
    const p = parents[i]
    if (p !== -1) {
      children[p].push(i)
    }
  }

  const dfs = (node: number) => {
    let score = 1
    let size = n - 1
    for (const c of children[node]) {
      let t = dfs(c)
      score *= t
      size -= t
    }
    if (node !== 0) {
      score *= size
    }
    if (score === maxScore) {
      cnt++
    } else if (score > maxScore) {
      maxScore = score
      cnt = 1
    }
    return n - size
  }

  dfs(0)
  return cnt
}
