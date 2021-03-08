export function minCut(s: string): number {
  const n = s.length
  const g: boolean[][] = new Array(n).fill(0).map(() => new Array(n).fill(true))

  for (let i = n - 1; i >= 0; --i) {
    for (let j = i + 1; j < n; ++j) {
      g[i][j] = s[i] == s[j] && g[i + 1][j - 1]
    }
  }

  const f: number[] = new Array(n).fill(Number.MAX_SAFE_INTEGER)
  for (let i = 0; i < n; ++i) {
    if (g[0][i]) {
      f[i] = 0
    } else {
      for (let j = 0; j < i; ++j) {
        if (g[j + 1][i]) {
          f[i] = Math.min(f[i], f[j] + 1)
        }
      }
    }
  }

  return f[n - 1]
}
