export function minSteps(n: number): number {
  const f: number[] = new Array(n + 1).fill(0)
  for (let i = 2; i <= n; ++i) {
    f[i] = Number.MAX_SAFE_INTEGER
    for (let j = 1; j * j <= i; ++j) {
      if (i % j === 0) {
        f[i] = Math.min(f[i], Math.floor(f[j] + i / j))
        f[i] = Math.min(f[i], Math.floor(f[i / j] + j))
      }
    }
  }
  return f[n]
}
