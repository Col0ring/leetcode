// dp
export function findRotateSteps(ring: string, key: string): number {
  const getIdx = (str: string, v: number) =>
    str.codePointAt(v)! - 'a'.codePointAt(0)!

  const n = ring.length,
    m = key.length
  const pos: number[][] = new Array(26).fill(0).map((v) => [])
  for (let i = 0; i < n; ++i) {
    pos[getIdx(ring, i)].push(i)
  }
  const dp: number[][] = new Array(m)
    .fill(0)
    .map((v) => new Array(n).fill(Number.MAX_SAFE_INTEGER))

  for (const i of pos[getIdx(key, 0)]) {
    dp[0][i] = Math.min(i, n - i) + 1
  }
  for (let i = 1; i < m; ++i) {
    for (const j of pos[getIdx(key, i)]) {
      for (const k of pos[getIdx(key, i - 1)]) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i - 1][k] + Math.min(Math.abs(j - k), n - Math.abs(j - k)) + 1
        )
      }
    }
  }
  return dp[m - 1].reduce(
    (pre, cur) => Math.min(pre, cur),
    Number.MAX_SAFE_INTEGER
  )
}
