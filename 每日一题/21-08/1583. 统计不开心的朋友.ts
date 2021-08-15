export function unhappyFriends(
  n: number,
  preferences: number[][],
  pairs: number[][]
): number {
  const order: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      order[i][preferences[i][j]] = j
    }
  }
  const match: number[] = new Array(n).fill(0)
  for (const pair of pairs) {
    let person0 = pair[0],
      person1 = pair[1]
    match[person0] = person1
    match[person1] = person0
  }
  let unhappyCount = 0
  for (let x = 0; x < n; x++) {
    const y = match[x]
    const index = order[x][y]
    for (let i = 0; i < index; i++) {
      const u = preferences[x][i]
      const v = match[u]
      if (order[u][x] < order[u][v]) {
        unhappyCount++
        break
      }
    }
  }
  return unhappyCount
}
