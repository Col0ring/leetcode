export function canEat(candiesCount: number[], queries: number[][]): boolean[] {
  const n = candiesCount.length

  // 前缀和
  const sum: number[] = new Array(n).fill(0)
  sum[0] = candiesCount[0]
  for (let i = 1; i < n; ++i) {
    sum[i] = sum[i - 1] + candiesCount[i]
  }

  const q = queries.length
  const ans: boolean[] = new Array(q).fill(false)
  for (let i = 0; i < q; ++i) {
    const query = queries[i]
    const favoriteType = query[0],
      favoriteDay = query[1],
      dailyCap = query[2]

    const x1 = favoriteDay + 1
    const y1 = (favoriteDay + 1) * dailyCap
    const x2 = favoriteType == 0 ? 1 : sum[favoriteType - 1] + 1
    const y2 = sum[favoriteType]

    ans[i] = !(x1 > y2 || y1 < x2)
  }
  return ans
}
