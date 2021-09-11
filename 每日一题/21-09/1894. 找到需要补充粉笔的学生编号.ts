export function chalkReplacer(chalk: number[], k: number): number {
  const n = chalk.length
  let total = 0
  for (const num of chalk) {
    total += num
  }
  k %= total
  let res = -1
  for (let i = 0; i < n; ++i) {
    if (chalk[i] > k) {
      res = i
      break
    }
    k -= chalk[i]
  }
  return res
}
