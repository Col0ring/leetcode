export function makesquare(matchsticks: number[]): boolean {
  const totalLen = matchsticks.reduce((prev, next) => {
    return prev + next
  }, 0)
  if (totalLen % 4 !== 0) {
    return false
  }
  matchsticks.sort((a, b) => a - b)
  for (let i = 0, j = matchsticks.length - 1; i < j; i++, j--) {
    const temp = matchsticks[i]
    matchsticks[i] = matchsticks[j]
    matchsticks[j] = temp
  }

  const edges: number[] = new Array(4).fill(0)
  return dfs(0, matchsticks, edges, Math.floor(totalLen / 4))
}

const dfs = (
  index: number,
  matchsticks: number[],
  edges: number[],
  len: number
) => {
  if (index === matchsticks.length) {
    return true
  }
  for (let i = 0; i < edges.length; i++) {
    edges[i] += matchsticks[index]
    if (edges[i] <= len && dfs(index + 1, matchsticks, edges, len)) {
      return true
    }
    edges[i] -= matchsticks[index]
  }
  return false
}
